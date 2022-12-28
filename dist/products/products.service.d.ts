import { ProductRepository } from './db/product.repository';
import { Product } from './db/products.entity';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsDataService {
    private productRepository;
    constructor(productRepository: ProductRepository);
    getProductById(id: string): Promise<Product>;
    getAllProducts(): Promise<Product[]>;
    addProduct(item: CreateProductDto): Promise<Product>;
    deleteProduct(id: string): Promise<void>;
}
