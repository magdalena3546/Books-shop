import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'products',
})
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({
    default: 0,
    type: 'float',
  })
  price: number;

  @Column({
    default: 1,
  })
  count: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column()
  mainImage: string;

  @Column({ type: 'simple-array', nullable: true })
  images: Array<string>;
}
