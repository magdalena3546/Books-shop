import { Product } from 'src/products/db/products.entity';
import { Order } from './orders.entity';
export declare class OrderProduct {
    id: string;
    product: Product;
    price: number;
    count: number;
    order: Order;
    addInfo: string;
}
