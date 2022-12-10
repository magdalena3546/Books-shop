import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsUUID,
  ValidateNested,
  Min,
  IsEnum,
  IsDate,
} from 'class-validator';
import { ExternalUserDto } from 'src/users/dto/external-user.dto';
import { Statuses } from '../enums/statuses.enum';

export class ExternalOrderDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @ValidateNested({ each: true })
  @Type(() => ExternalOrderProductDto)
  orderProducts: Array<ExternalOrderProductDto>;

  @ValidateNested({ each: true })
  @Type(() => ExternalUserDto)
  user: ExternalUserDto;

  @IsDate()
  createdAt: Array<number>;

  @IsEnum(Statuses)
  status: Statuses;

  @IsNumber()
  @Min(1)
  price: number;
}

export class ExternalOrderProductDto {
  @IsNotEmpty()
  @IsUUID()
  productId: string;

  @IsNotEmpty()
  @IsUUID()
  orderProductId: string;

  @IsNotEmpty()
  productName: string;

  @IsNumber()
  @Min(1)
  count: number;

  @IsNumber()
  price: number;
}
