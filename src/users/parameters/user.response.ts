/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class BaseUsuarioResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  full_name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
