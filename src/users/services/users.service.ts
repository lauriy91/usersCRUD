/* eslint-disable prettier/prettier */
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../parameters/user.entity';
import { LoginUserDTO, UserRolDTO } from '../parameters/user.dto';
import { hash, compare } from 'bcrypt';
import { LoginResponse } from '../parameters/user.response';
import { JwtService } from '@nestjs/jwt';

// Encargado de la lógica del negocio a traves de la creación de metodos que serán inyectados en los controladores.
@Injectable()
export class UsersService {
    constructor(
        private jwtService: JwtService,
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

    // metodo encargado de traer todos los usuarios por email
    async getOneEmail(email: string): Promise<UserEntity> {
        return this.userRepository.findOne({ where: { email } });
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

    // metodo login
    async LoginUser(loginUserDTO: LoginUserDTO): Promise<LoginResponse> {
        // Vrificación de la existencia del usuario
        const { password } = loginUserDTO;
        // const findUser = await this.usersRepository.signinUser(userSigninDTO);
        const findUser = await this.getOneEmail(loginUserDTO.email);
        if (!findUser) throw new HttpException("USER NOT FOUND", 404);

        // verificacion contraseña
        const checkPassword = await compare(password, findUser.password);
        if (checkPassword) throw new HttpException("PASSWORD INCORRECT", 403);

        const payload = { username: findUser.email };
        const token = this.jwtService.sign(payload);
        const expiresIn = "24h";

        return {
        access_token: token,
        expires_in: expiresIn,
        message: "Inicio de sesión exitoso",
        status: true
        };
    }
}
