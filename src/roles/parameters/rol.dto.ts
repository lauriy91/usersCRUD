/* eslint-disable prettier/prettier */
import { IsBoolean, IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RolDto {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsBoolean()
  readonly is_deleted: boolean;

  constructor(name: string, is_deleted: boolean) {
    this.name = name;
    this.is_deleted = is_deleted;
  }
}
