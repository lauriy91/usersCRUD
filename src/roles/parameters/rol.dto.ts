/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class RolDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly is_deleted: boolean;

  @ApiProperty()
  readonly created_at: string;

  @ApiProperty()
  readonly updated: string;

  constructor(name: string, is_deleted: boolean, created_at: string, updated: string) {
    this.name = name;
    this.is_deleted = is_deleted;
    this.created_at = created_at;
    this.updated = updated;
  }
}
