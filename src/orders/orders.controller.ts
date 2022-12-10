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
  getAllOrders(): Promise<Order[]> {
    return this.orderService.getAllOrders();
  }

  @Post()
  async addOrder(@Body() item: CreateOrderDto): Promise<ExternalOrderDto> {
    return this.mapOrderToExternal(await this.orderService.addOrder(item));
  }

  mapOrderToExternal(order: Order): ExternalOrderDto {
    // const user = {
    //   firstName: order.user.firstName,
    //   lastName: order.user.lastName,
    //   email: order.user.email,
    //   address: order.user.address,
    // };
    return {
      ...order,
      user: order.user,
      createdAt: dateToArray(order.createdAt),

      orderProducts: order.orderProducts.map((elm) => {
        return {
          orderProductId: elm.id,
          productId: elm.product.id,
          productName: elm.product.name,
          count: elm.product.count,
          price: elm.product.price,
        };
      }),
    };
  }
}
