import { ProductsDataService } from './products.service';
import { ExternalProductDto } from './dto/external-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsController {
    private productService;
    constructor(productService: ProductsDataService);
    getProductById(id: string): Promise<ExternalProductDto>;
    getAllProducts(): Promise<ExternalProductDto[]>;
    addProduct(item: CreateProductDto): Promise<ExternalProductDto>;
    deleteProduct(_id_: string): Promise<void>;
}
