import { Repository, DataSource } from 'typeorm';
import { Order } from './orders.entity';
export declare class OrderRepository extends Repository<Order> {
    private dataSource;
    constructor(dataSource: DataSource);
}
