/* eslint-disable prettier/prettier */
import { UsersService } from '../services/users.service';
import { Body, Controller, Post, Put, Get, NotFoundException, Param, Delete, Patch, 
  UseGuards 
  } from '@nestjs/common';
import { UserEntity } from '../parameters/user.entity';
import { LoginUserDTO, UserDTO, UserRolDTO } from '../parameters/user.dto';

import {
    ApiBadRequestResponse,
    ApiForbiddenResponse,
    ApiInternalServerErrorResponse,
    ApiOkResponse,
    ApiOperation,
    ApiTags,
    ApiUnauthorizedResponse,
    ApiBearerAuth
  } from "@nestjs/swagger";
import { BaseUsuarioResponse, LoginResponse } from '../parameters/user.response';
import { ErrorBaseResponse } from 'src/common/exception/error.response';
import { AuthGuard } from 'src/common/security/auth.guard';
  
  // Rutas y versiones del proyecto
  @ApiTags("users")
  @Controller({
    path: "users",
    version: "1"
  })
  // Errors responses
  @ApiUnauthorizedResponse({
    description: "Unauthorized",
    type: ErrorBaseResponse
  })
  @ApiForbiddenResponse({
    description: "Forbidden",
    type: ErrorBaseResponse
  })
  @ApiBadRequestResponse({
    description: "Bad Request",
    type: ErrorBaseResponse
  })
  @ApiInternalServerErrorResponse({
    description: "Internal Server Error",
    type: ErrorBaseResponse
  })

@Controller('users')
export class UsersController {
    constructor(private readonly usersService :  UsersService) {}

    // Crear usuarios
    @ApiOperation({
        summary: "Crear usuarios",
        description: "Crear usuarios"
      })
      @ApiOkResponse({
        type: BaseUsuarioResponse
      })
    @Post()
    async create(@Body() data: UserDTO): Promise<UserEntity>{
        return this.usersService.create(data);
    }

    // Traer todo los usuarios existentes
    @ApiOperation({
        summary: "Traer todos los usuarios",
        description: "Traer todos los usuarios"
      })
      @ApiOkResponse({
        type: BaseUsuarioResponse
      })
    @Get()
    async findAll(): Promise<UserEntity[]> {
      return this.usersService.getAll();
    }

    // Traer usuarios por id
    @ApiOperation({
        summary: "Traer usuarios por id",
        description: "Traer usuarios por id"
      })
      @ApiOkResponse({
        type: BaseUsuarioResponse
      })
    @Get(':id')
    async getOne(@Param('id') id: number): Promise<UserEntity> {
      const user = await this.usersService.getOne(id);
      if (!user) {
        throw new NotFoundException('User does not exist!');
      } else {
        return user;
      }
    }

    //Actualizar usuarios por id
    @ApiOperation({
      summary: "Actualizar usuarios por id",
      description: "Actualizar usuarios por id"
    })
    @ApiOkResponse({
      type: BaseUsuarioResponse
    })
    @Put(':id')
    async update(@Param('id') id: number, @Body() data: UserDTO): Promise<any> {
      return this.usersService.update(id, data);
    }

    // Actualizar el rol de los usuarios por id
    @ApiOperation({
      summary: "Actualizar el rol de los usuarios por id",
      description: "Actualizar el rol de los usuarios por id"
    })
    @ApiOkResponse({
      type: BaseUsuarioResponse
    })
    @Patch(':id')
    async updateUserRol(@Param('id') id: number, @Body() data: UserRolDTO): Promise<any> {
      return this.usersService.update(id, data);
    }

    //Eliminar usuarios por id
    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @ApiOperation({
      summary: "Eliminar usuarios por id",
      description: "Eliminar usuarios por id"
    })
    @ApiOkResponse({
      type: BaseUsuarioResponse
    })
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
      //Condicional si no existe arroja error
      const user = await this.usersService.getOne(id);
      if (!user) {
        throw new NotFoundException('User does not exist!');
      }
      return this.usersService.delete(id);
    }

    // Inicio de sesión   
    @ApiOperation({
      summary: "Signin users ",
      description: "Signin users "
    })
    @ApiOkResponse({
      type: LoginResponse
    })
    @Post("login")
    async signin(@Body() data: LoginUserDTO): Promise<LoginResponse> {
      return await this.usersService.LoginUser(data);
    }
}
