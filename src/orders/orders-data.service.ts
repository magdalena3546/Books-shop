import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/products/db/product.repository';
import { Product } from 'src/products/db/products.entity';
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
      orderProduct.count = product.count;
      orderProduct.price = productDb.price;
      orderProduct.addInfo = product.addInfo;

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
      orderToSave.firstName = newOrder.firstName;
      orderToSave.lastName = newOrder.lastName;
      orderToSave.email = newOrder.email;
      orderToSave.city = newOrder.city;
      orderToSave.street = newOrder.street;
      orderToSave.number = newOrder.number;
      orderToSave.status = Statuses.NEW;
      orderToSave.orderProducts = await this.saveOrderProducts(
        newOrder.orderProducts,
      );
      orderToSave.totalPrice = newOrder.totalPrice;
      return await this.orderRepository.save(orderToSave);
    });
  }

  getOrderById(id: string): Promise<Order> {
    return this.orderRepository.findOneBy({ id });
  }
}
