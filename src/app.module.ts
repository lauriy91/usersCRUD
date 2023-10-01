/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from '../ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    TypeOrmModule.forRoot({...config, autoLoadEntities: true, retryDelay: 3000, retryAttempts: 10})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
