import { Injectable } from '@nestjs/common';
import { ProductRepository } from './db/product.repository';
import { Product } from './db/products.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsDataService {
  constructor(private productRepository: ProductRepository) {}

  async getProductById(id: string): Promise<Product> {
    return await this.productRepository.findOneBy({ id });
  }

  getAllProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async addProduct(item: CreateProductDto): Promise<Product> {
    const productToSave = new Product();
    productToSave.name = item.name;
    productToSave.price = item.price;
    productToSave.count = item.count;
    productToSave.mainImage = item.mainImage;

    return this.productRepository.save(productToSave);
  }
}
