/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty()
  readonly full_name: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly password: string;

  constructor(full_name: string, email: string, password: string) {
    this.full_name = full_name;
    this.email = email;
    this.password = password;
  }
}
