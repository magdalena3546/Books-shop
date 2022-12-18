import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsUUID,
  ValidateNested,
  Min,
  IsEnum,
  IsDate,
  IsEmail,
} from 'class-validator';
import { Column } from 'typeorm';
import { Statuses } from '../enums/statuses.enum';

export class ExternalOrderDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @ValidateNested({ each: true })
  @Type(() => ExternalOrderProductDto)
  orderProducts: Array<ExternalOrderProductDto>;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  number: number;

  @IsDate()
  createdAt: Array<number>;

  @IsEnum(Statuses)
  status: Statuses;

  @IsNumber()
  @Min(1)
  totalPrice: number;
}

export class ExternalOrderProductDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsUUID()
  productId: string;

  @IsNotEmpty()
  @IsUUID()
  orderId: string;

  @IsNotEmpty()
  productName: string;

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
