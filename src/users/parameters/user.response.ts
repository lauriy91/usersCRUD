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

  @ApiProperty()
  phone: number;

  @ApiProperty()
  role: string;

  @ApiProperty()
  is_deleted: boolean;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}

export class LoginResponse {
  @ApiProperty()
  access_token: string;

  @ApiProperty()
  expires_in: any;

  @ApiProperty()
  message: string;

  @ApiProperty()
  status: boolean;
}
