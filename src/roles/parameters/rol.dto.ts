/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class RolDto {
  // @ApiProperty()
  // readonly name: string;

  @ApiProperty()
  readonly rol: string;

  constructor(rol: string) {
    // this.name = name;
    this.rol = rol;
  }
}

export class UpdateRolDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly rol: string;

  @ApiProperty()
  readonly is_deleted: boolean;

  constructor(rol: string, name: string, is_deleted: boolean) {
    // super(rol);
    this.name = name;
    this.rol = rol;
    this.is_deleted = is_deleted;
  }
}
