import { Order } from './db/orders.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { ExternalOrderDto } from './dto/external-order.dto';
import { OrdersDataService } from './orders-data.service';
export declare class OrdersController {
    private orderService;
    constructor(orderService: OrdersDataService);
    getOrderById(id: string): Promise<ExternalOrderDto>;
    getAllOrders(): Promise<ExternalOrderDto[]>;
    addOrder(item: CreateOrderDto): Promise<Order>;
    mapOrderToExternal(order: Order): ExternalOrderDto;
}
