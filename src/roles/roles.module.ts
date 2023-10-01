/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RolesController } from './controllers/roles.controller';
import { RolesService } from './services/roles.service';
import { RolEntity } from './parameters/rol.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/parameters/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RolEntity, UserEntity])],
  controllers: [RolesController],
  providers: [RolesService]
})
export class RolesModule {}