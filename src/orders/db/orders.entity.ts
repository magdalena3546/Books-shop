import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Statuses } from '../enums/statuses.enum';
import { OrderProduct } from './order-products.entity';

@Entity({
  name: 'orders',
})
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order, {
    eager: true,
    cascade: true,
  })
  orderProducts: OrderProduct[];

  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 50 })
  street: string;

  @Column({ default: 1, type: 'int' })
  number: number;

  @Column({
    default: 0,
    type: 'float',
  })
  totalPrice: number;

  @Column('enum', {
    enum: Statuses,
  })
  status: Statuses;
}
