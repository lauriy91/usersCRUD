/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// Modelo encargado de crear las clases y base de datos de los roles
@Entity()
export class RolEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    is_deleted:string;

    @Column()
    created_at:string;

    @Column()
    updated_at:string;
}


