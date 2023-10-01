/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty()
  readonly id?: number;

  @ApiProperty()
  readonly full_name: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly password: string;

  constructor(id: number, name: string, email: string, password: string) {
    this.id = id;
    this.full_name = name;
    this.email = email;
    this.password = password;
  }
}