import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsDataService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './db/products.entity';
import { ProductRepository } from './db/product.repository';

@Module({
  controllers: [ProductsController],
  providers: [ProductsDataService, ProductRepository],
  imports: [TypeOrmModule.forFeature([Product])],
})
export class ProductsModule {}
