/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import * as config from '../ormconfig';

// @Module({
//   imports: [
//     ConfigModule.forRoot(),
//     UsersModule,
//     TypeOrmModule.forRoot({...config, autoLoadEntities: true, retryDelay: 3000, retryAttempts: 10})
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: !!process.env.DB_SYNC
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
