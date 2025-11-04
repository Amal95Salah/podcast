// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { PrismaModule } from '../prisma.module.js';

@Module({
  imports: [PrismaModule], // <-- import PrismaModule
  providers: [UsersService],
  exports: [UsersService], // so AuthModule can use UsersService
})
export class UsersModule {}
