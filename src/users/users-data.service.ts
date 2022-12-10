import { Injectable } from '@nestjs/common';
import { UserRepository } from './db/user.repository';
import { User } from './db/users.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class UsersDataService {
  constructor(
    private userRepository: UserRepository,

    private dataSource: DataSource,
  ) {}

  //   getAllUsers(): Promise<User[]> {
  //     return this.userRepository.find();
  //   }

  //   getUserById(id: string): Promise<User> {
  //     return this.userRepository.findOneBy({ id });
  //   }
}
