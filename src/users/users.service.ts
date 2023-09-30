/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

// Encargado de la lógica del negocio a traves de la creación de metodos que serán inyectados en los controladores.
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository : Repository<UserEntity>,
    ){}

    // metodo encargado de la creación de usuarios
    async create(user: Partial<UserEntity>): Promise<UserEntity> {
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }
}
