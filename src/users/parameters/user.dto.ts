/* eslint-disable prettier/prettier */
import { Transform } from '@nestjs/class-transformer';
import { IsBoolean, IsEmail, IsPhoneNumber, IsString, MaxLength, MinLength } from '@nestjs/class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty()
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  readonly full_name: string;

  @ApiProperty()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsString()
  @MinLength(6)
  @Transform(({ value }) => value.trim())
  readonly password: string;

  @ApiProperty()
  @ApiPropertyOptional()
  @IsPhoneNumber()
  @MinLength(10)
  readonly phone?: number;

  @ApiProperty()
  readonly role: string;

  @ApiProperty()
  @IsBoolean()
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

export class LoginUserDTO {

  @ApiProperty()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsString()
  @MinLength(6)
  @Transform(({ value }) => value.trim())
  readonly password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
