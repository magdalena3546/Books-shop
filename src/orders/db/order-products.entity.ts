import { Product } from 'src/products/db/products.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Order } from './orders.entity';

@Entity({
  name: 'order_products',
})
export class OrderProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Product, (product) => product.id, {
    eager: true,
  })
  product: Product;

  @Column({
    default: 0,
    type: 'float',
  })
  price: number;

  @Column({
    default: 1,
  })
  count: number;

  @ManyToOne(() => Order, (order) => order.id)
  order: Order;

  @Column({
    type: 'text',
    nullable: true,
  })
  addInfo: string;
}
