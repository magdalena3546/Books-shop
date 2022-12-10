import { IsArray, IsNotEmpty, IsNumber, MaxLength, Min } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @MaxLength(25)
  name: string;
  @IsNumber()
  @Min(0)
  price: number;
  @IsNumber()
  @Min(0)
  count: number;
  @IsNotEmpty()
  mainImage: string;
  @IsArray()
  images: string;
}
