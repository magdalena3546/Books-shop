import { Statuses } from '../enums/statuses.enum';
export declare class ExternalOrderDto {
    id: string;
    orderProducts: Array<ExternalOrderProductDto>;
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    street: string;
    number: number;
    createdAt: Array<number>;
    status: Statuses;
    totalPrice: number;
}
export declare class ExternalOrderProductDto {
    id: string;
    productId: string;
    orderId: string;
    productName: string;
    count: number;
    price: number;
    addInfo: string;
}
