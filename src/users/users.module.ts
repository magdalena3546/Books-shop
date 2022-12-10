import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersDataService } from './users-data.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './db/users.entity';
import { UserRepository } from './db/user.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersDataService, UserRepository],
  imports: [TypeOrmModule.forFeature([User])],
})
export class UsersModule {}
