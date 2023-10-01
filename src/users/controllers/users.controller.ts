import { Get } from '@nestjs/common';
/* eslint-disable prettier/prettier */
import { UsersService } from '../services/users.service';
import { Body, Controller, Post } from '@nestjs/common';
import { UserEntity } from '../parameters/user.entity';
import { UserDTO } from '../parameters/user.dto';

import {
    ApiBadRequestResponse,
    ApiForbiddenResponse,
    ApiInternalServerErrorResponse,
    ApiOkResponse,
    ApiOperation,
    ApiTags,
    ApiUnauthorizedResponse
  } from "@nestjs/swagger";
import { BaseUsuarioResponse } from '../parameters/user.response';
  
  // Paths and version project
  @ApiTags("users")
  @Controller({
    path: "users",
    version: "1"
  })
  // Errors responses
  @ApiUnauthorizedResponse({
    description: "Unauthorized",
    // type: ErrorBaseResponse
  })
  @ApiForbiddenResponse({
    description: "Forbidden",
    // type: ErrorBaseResponse
  })
  @ApiBadRequestResponse({
    description: "Bad Request",
    // type: ErrorBaseResponse
  })
  @ApiInternalServerErrorResponse({
    description: "Internal Server Error",
    // type: ErrorBaseResponse
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


}
