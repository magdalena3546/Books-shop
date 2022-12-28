import { Repository, DataSource } from 'typeorm';
import { OrderProduct } from './order-products.entity';
export declare class OrderProductRepository extends Repository<OrderProduct> {
    private dataSource;
    constructor(dataSource: DataSource);
}
