import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { dateToArray } from 'src/shared/helpers/date.helpers';
import { Order } from './db/orders.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { ExternalOrderDto } from './dto/external-order.dto';
import { OrdersDataService } from './orders-data.service';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersDataService) {}

  @Get(':id')
  async getOrderById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<ExternalOrderDto> {
    return this.mapOrderToExternal(await this.orderService.getOrderById(id));
  }

  @Get()
  async getAllOrders(): Promise<ExternalOrderDto[]> {
    const ordersArray = await this.orderService.getAllOrders();
    return ordersArray.map((elm) => this.mapOrderToExternal(elm));
  }

  @Post()
  async addOrder(@Body() item: CreateOrderDto): Promise<Order> {
    return await this.orderService.addOrder(item);
  }

  mapOrderToExternal(order: Order): ExternalOrderDto {
    return {
      ...order,
      createdAt: dateToArray(order.createdAt),

      orderProducts: order.orderProducts.map((elm) => {
        const orderProduct = {
          id: elm.id,
          productId: elm.product.id,
          productName: elm.product.name,
          count: elm.count,
          price: elm.price,
          addInfo: elm.addInfo,
          orderId: order.id,
        };
        return orderProduct;
      }),
    };
  }
}
