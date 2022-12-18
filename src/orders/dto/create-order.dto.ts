import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsUUID,
  ValidateNested,
  Min,
  IsEmail,
} from 'class-validator';
import { Column } from 'typeorm';

export class CreateOrderDto {
  @ValidateNested({ each: true })
  @Type(() => CreateOrderProductDto)
  orderProducts: Array<CreateOrderProductDto>;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  @IsNumber()
  number: number;

  @Column({
    default: 0,
    type: 'float',
  })
  totalPrice: number;
}

export class CreateOrderProductDto {
  @IsNotEmpty()
  @IsUUID()
  productId: string;

  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Min(1)
  count: number;

  @IsNumber()
  price: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  addInfo: string;
}
