import { Statuses } from '../enums/statuses.enum';
import { OrderProduct } from './order-products.entity';
export declare class Order {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    orderProducts: OrderProduct[];
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    street: string;
    number: number;
    totalPrice: number;
    status: Statuses;
}
