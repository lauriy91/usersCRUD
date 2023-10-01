/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class BaseRolResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  readonly is_deleted: boolean;

  @ApiProperty()
  readonly created_at: string;

  @ApiProperty()
  readonly updated: string;
}
