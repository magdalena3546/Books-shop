import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/products/db/product.repository';
import { Product } from 'src/products/db/products.entity';
import { User } from 'src/users/db/users.entity';
import { DataSource } from 'typeorm';
import { OrderProduct } from './db/order-products.entity';
import { OrderProductRepository } from './db/order-products.repository';
import { OrderRepository } from './db/order.repository';
import { Order } from './db/orders.entity';
import { CreateOrderDto, CreateOrderProductDto } from './dto/create-order.dto';
import { Statuses } from './enums/statuses.enum';

@Injectable()
export class OrdersDataService {
  constructor(
    private orderRepository: OrderRepository,
    private orderProductRepository: OrderProductRepository,
    private productRepository: ProductRepository,
    private dataSource: DataSource,
  ) {}

  async saveOrderProducts(
    productsArr: CreateOrderProductDto[],
  ): Promise<OrderProduct[]> {
    const orderProducts: OrderProduct[] = [];
    productsArr.map(async (product) => {
      const orderProduct = new OrderProduct();

      const productDb = await this.productRepository.findOneBy({
        id: product.productId,
      });

      orderProduct.product = new Product();
      orderProduct.product.id = productDb.id;
      orderProduct.product.name = productDb.name;
      orderProduct.product.count = productDb.count;
      orderProduct.product.price = productDb.price;
      orderProduct.product.description = productDb.description;

      await this.orderProductRepository.save(orderProduct);
      orderProducts.push(orderProduct);
    });
    return orderProducts;
  }

  getAllOrders(): Promise<Order[]> {
    return this.orderRepository.find();
  }

  async addOrder(newOrder: CreateOrderDto): Promise<Order> {
    return this.dataSource.transaction(async () => {
      const orderToSave = new Order();

      orderToSave.user = new User();
      orderToSave.user.firstName = newOrder.user.firstName;
      orderToSave.user.lastName = newOrder.user.lastName;
      orderToSave.user.email = newOrder.user.email;
      orderToSave.user.city = newOrder.user.city;
      orderToSave.user.street = newOrder.user.street;
      orderToSave.user.number = newOrder.user.number;
      orderToSave.status = Statuses.NEW;
      orderToSave.orderProducts = await this.saveOrderProducts(
        newOrder.orderProducts,
      );
      orderToSave.addInfo = newOrder.addInfo;
      orderToSave.price = 0;

      orderToSave.orderProducts.forEach((elm) => {
        orderToSave.price += elm.price * elm.count;
        return orderToSave.price;
      });
      return await this.orderRepository.save(orderToSave);
    });
  }

  getOrderById(id: string): Promise<Order> {
    return this.orderRepository.findOneBy({ id });
  }
}
