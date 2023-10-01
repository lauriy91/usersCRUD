/* eslint-disable prettier/prettier */
import { RolesService } from '../services/roles.service';
import { Body, Controller, Post, Put, Get, NotFoundException, Param, Delete, Query } from '@nestjs/common';
// import { Body, Controller, Put, Get, NotFoundException, Param, Delete } from '@nestjs/common';
import { RolEntity } from '../parameters/rol.entity';
import { RolDto, UpdateRolDto } from '../parameters/rol.dto';

import {
    ApiBadRequestResponse,
    ApiForbiddenResponse,
    ApiInternalServerErrorResponse,
    ApiOkResponse,
    ApiOperation,
    ApiTags,
    ApiUnauthorizedResponse
  } from "@nestjs/swagger";
import { BaseRolResponse } from '../parameters/rol.response';
import { ErrorBaseResponse } from 'src/common/exception/error.response';
import { UserEntity } from 'src/users/parameters/user.entity';
  
  // Rutas y versiones del proyecto
  @ApiTags("roles")
  @Controller({
    path: "roles",
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

@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService :  RolesService) {}

    // Crear roles
    @ApiOperation({
        summary: "Crear roles",
        description: "Crear roles"
      })
      @ApiOkResponse({
        type: BaseRolResponse
      })
    @Post()
    async create(@Body() data: RolDto ): Promise<RolEntity>{
        return this.rolesService.create(data);
    }

    // Traer todo los roles existentes
    @ApiOperation({
        summary: "Traer todos los roles",
        description: "Traer todos los roles"
      })
      @ApiOkResponse({
        type: BaseRolResponse
      })
    @Get()
    async findAll(): Promise<RolEntity[]> {
      return this.rolesService.getAll();
    }

    // Traer usuarios por rol REVISAR
    @ApiOperation({
        summary: "Traer usuarios por rol",
        description: "Traer usuarios por rol"
      })
      @ApiOkResponse({
        type: BaseRolResponse
      })
    @Get()
    async getUsersRol(@Query('role') role: string): Promise<UserEntity[]> {
        return this.rolesService.getUsersRol([role]);
      }

    //Actualizar roles por id
    @ApiOperation({
      summary: "Actualizar roles por id",
      description: "Actualizar roles por id"
    })
    @ApiOkResponse({
      type: BaseRolResponse
    })
    @Put(':id')
    async update(@Param('id') id: number, @Body() data: UpdateRolDto): Promise<any> {
      return this.rolesService.update(id, data);
    }

    //Eliminar roles por id
    @ApiOperation({
      summary: "Eliminar roles por id",
      description: "Eliminar roles por id"
    })
    @ApiOkResponse({
      type: BaseRolResponse
    })
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
      //Condicional si no existe arroja error
      const rol = await this.rolesService.getOne(id);
      if (!rol) {
        throw new NotFoundException('rol does not exist!');
      }
      return this.rolesService.delete(id);
    }
}
