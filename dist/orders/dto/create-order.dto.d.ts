export declare class CreateOrderDto {
    orderProducts: Array<CreateOrderProductDto>;
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    street: string;
    number: number;
    totalPrice: number;
}
export declare class CreateOrderProductDto {
    productId: string;
    name: string;
    count: number;
    price: number;
    addInfo: string;
}
