import { UserRepository } from './db/user.repository';
import { DataSource } from 'typeorm';
export declare class UsersDataService {
    private userRepository;
    private dataSource;
    constructor(userRepository: UserRepository, dataSource: DataSource);
}
