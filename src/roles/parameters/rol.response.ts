/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class BaseRolResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  rol: string;

  @ApiProperty()
  readonly created_at: Date;

  @ApiProperty()
  readonly updated: Date;
}

export class UpdateRolResponse extends BaseRolResponse {
  @ApiProperty()
  name: string;

  @ApiProperty()
  readonly is_deleted: boolean;
}
