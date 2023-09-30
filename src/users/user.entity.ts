/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// Modelo encargado de crear las clases y base de datos de los usuarios
@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    full_name: string;

    @Column()
    email:string;

    @Column()
    password:string;

    // @Column()
    // phone:string;

    // @Column()
    // role:string;

    // @Column()
    // is_deleted:string;

    // @Column()
    // created_at:string;

    // @Column()
    // updated_at:string;
}


