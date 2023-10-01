/* eslint-disable prettier/prettier */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty()
  readonly full_name: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly password: string;

  @ApiProperty()
  @ApiPropertyOptional()
  readonly phone?: number;

  @ApiProperty()
  readonly role: string;

  @ApiProperty()
  readonly is_deleted: boolean;

  constructor(full_name: string, email: string, password: string, phone: number, role: string, is_deleted: boolean) {
    this.full_name = full_name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.role = role;
    this.is_deleted = is_deleted;
  }
}

export class UserRolDTO {

  @ApiProperty()
  readonly role: string;

  constructor(role: string) {
    this.role = role;
  }
}
