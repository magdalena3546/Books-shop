import { ProductRepository } from 'src/products/db/product.repository';
import { DataSource } from 'typeorm';
import { OrderProduct } from './db/order-products.entity';
import { OrderProductRepository } from './db/order-products.repository';
import { OrderRepository } from './db/order.repository';
import { Order } from './db/orders.entity';
import { CreateOrderDto, CreateOrderProductDto } from './dto/create-order.dto';
export declare class OrdersDataService {
    private orderRepository;
    private orderProductRepository;
    private productRepository;
    private dataSource;
    constructor(orderRepository: OrderRepository, orderProductRepository: OrderProductRepository, productRepository: ProductRepository, dataSource: DataSource);
    saveOrderProducts(productsArr: CreateOrderProductDto[]): Promise<OrderProduct[]>;
    getAllOrders(): Promise<Order[]>;
    addOrder(newOrder: CreateOrderDto): Promise<Order>;
    getOrderById(id: string): Promise<Order>;
}
