import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsUUID,
  ValidateNested,
  Min,
} from 'class-validator';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Column } from 'typeorm';

export class CreateOrderDto {
  @ValidateNested({ each: true })
  @Type(() => CreateOrderProductDto)
  orderProducts: Array<CreateOrderProductDto>;

  @ValidateNested({ each: true })
  @Type(() => CreateUserDto)
  user: CreateUserDto;

  @Column({
    type: 'text',
    nullable: true,
  })
  addInfo: string;
}

export class CreateOrderProductDto {
  @IsNotEmpty()
  @IsUUID()
  productId: string;

  @IsNumber()
  @Min(1)
  count: number;
}
