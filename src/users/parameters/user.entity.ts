/* eslint-disable prettier/prettier */
import { Optional } from "@nestjs/common";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

// Modelo encargado de crear las clases y base de datos de los usuarios
@Entity('user_entity')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    full_name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    @Optional()
    phone?: number;

    @Column()
    role: string;

    @Column()
    is_deleted: boolean;

    @CreateDateColumn({ type: 'timestamptz' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at: Date;
}


