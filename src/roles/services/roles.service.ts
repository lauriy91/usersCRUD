/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolEntity } from '../parameters/rol.entity';
import { UserEntity } from 'src/users/parameters/user.entity';

// Encargado de la lógica del negocio a traves de la creación de metodos que serán inyectados en los controladores.
@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(RolEntity)
        private rolRepository : Repository<RolEntity>,
        @InjectRepository(UserEntity)
        private userRepository : Repository<UserEntity>,
    ){}

    // metodo encargado de la creación de roles
    async create(rol: Partial<RolEntity>): Promise<RolEntity> {
        const newRol = this.rolRepository.create(rol);
        return this.rolRepository.save(newRol);
    }

    // metodo encargado de traer todos los roles existentes
    async getAll(): Promise<RolEntity[]> {
        return this.rolRepository.find();
    }

    // metodo encargado de traer todos los usuarios por rol
    async getUsersRol([role]): Promise<UserEntity[]> {
        return this.userRepository.find(role);
    }

    // metodo encargado de traer todos los roles por id
    async getOne(id: number): Promise<RolEntity> {
        return this.rolRepository.findOne({ where: { id } });
    }
    
    // metodo encargado de actualizar roles
    async update(id: number, rol: Partial<RolEntity>): Promise<RolEntity> {
        await this.rolRepository.update(id, rol);
        return this.rolRepository.findOne({ where: { id } });
    }

    // metodo encargado de eliminar roles
    async delete(id: number): Promise<void> {
        await this.rolRepository.delete(id);
    }
}
