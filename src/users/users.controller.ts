import { UsersService } from './users.service';
/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService :  UsersService) {}

    // Crear usuarios
    @Post()
    async create(@Body() user : UserEntity): Promise<UserEntity>{
        return this.usersService.create(user);
    }
}
