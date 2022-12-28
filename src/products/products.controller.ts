import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { ProductsDataService } from './products.service';
import { ExternalProductDto } from './dto/external-product.dto';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsDataService) {}

  @Get(':id')
  async getProductById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<ExternalProductDto> {
    return this.productService.getProductById(id);
  }

  @Get()
  async getAllProducts(): Promise<ExternalProductDto[]> {
    return this.productService.getAllProducts();
  }

  @Post()
  async addProduct(
    @Body() item: CreateProductDto,
  ): Promise<ExternalProductDto> {
    return await this.productService.addProduct(item);
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteProduct(@Param('id') _id_: string): Promise<void> {
    return await this.productService.deleteProduct(_id_);
  }
}
