/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class RolDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly is_deleted: boolean;

  constructor(name: string, is_deleted: boolean) {
    this.name = name;
    this.is_deleted = is_deleted;
  }
}
