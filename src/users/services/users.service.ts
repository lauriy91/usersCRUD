/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../parameters/user.entity';
import { UserRolDTO } from '../parameters/user.dto';
import { hash } from 'bcrypt';

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

        // Encript password
        const { password } = user;
        const plainToHash = await hash(password, 8);
        user = { ...user, password: plainToHash };

        return this.userRepository.save(newUser);
    }

    // metodo encargado de traer todos los usuarios existentes
    async getAll(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }

    // metodo encargado de traer todos los usuarios por id
    async getOne(id: number): Promise<UserEntity> {
        return this.userRepository.findOne({ where: { id } });
    }
    
    // metodo encargado de actualizar usuarios
    async update(id: number, user: Partial<UserEntity>): Promise<UserEntity> {
        await this.userRepository.update(id, user);
        return this.userRepository.findOne({ where: { id } });
    }

    // metodo encargado de actualizar el rol de los usuarios
    async updateRole(id: number, user: Partial<UserRolDTO>): Promise<UserEntity> {
        await this.userRepository.update(id, user);
        return this.userRepository.findOne({ where: { id } });
    }

    // metodo encargado de eliminar usuarios
    async delete(id: number): Promise<any> {
        await this.userRepository.delete(id);
        return { msg: "Usuario eliminado" }
    }
}
