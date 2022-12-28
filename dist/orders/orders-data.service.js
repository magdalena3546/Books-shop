"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersDataService = void 0;
const common_1 = require("@nestjs/common");
const product_repository_1 = require("../products/db/product.repository");
const products_entity_1 = require("../products/db/products.entity");
const typeorm_1 = require("typeorm");
const order_products_entity_1 = require("./db/order-products.entity");
const order_products_repository_1 = require("./db/order-products.repository");
const order_repository_1 = require("./db/order.repository");
const orders_entity_1 = require("./db/orders.entity");
const statuses_enum_1 = require("./enums/statuses.enum");
let OrdersDataService = class OrdersDataService {
    constructor(orderRepository, orderProductRepository, productRepository, dataSource) {
        this.orderRepository = orderRepository;
        this.orderProductRepository = orderProductRepository;
        this.productRepository = productRepository;
        this.dataSource = dataSource;
    }
    async saveOrderProducts(productsArr) {
        const orderProducts = [];
        productsArr.map(async (product) => {
            const orderProduct = new order_products_entity_1.OrderProduct();
            const productDb = await this.productRepository.findOneBy({
                id: product.productId,
            });
            orderProduct.product = new products_entity_1.Product();
            orderProduct.product.id = productDb.id;
            orderProduct.product.name = productDb.name;
            orderProduct.count = product.count;
            orderProduct.price = productDb.price;
            orderProduct.addInfo = product.addInfo;
            await this.orderProductRepository.save(orderProduct);
            orderProducts.push(orderProduct);
        });
        return orderProducts;
    }
    getAllOrders() {
        return this.orderRepository.find();
    }
    async addOrder(newOrder) {
        return this.dataSource.transaction(async () => {
            const orderToSave = new orders_entity_1.Order();
            orderToSave.firstName = newOrder.firstName;
            orderToSave.lastName = newOrder.lastName;
            orderToSave.email = newOrder.email;
            orderToSave.city = newOrder.city;
            orderToSave.street = newOrder.street;
            orderToSave.number = newOrder.number;
            orderToSave.status = statuses_enum_1.Statuses.NEW;
            orderToSave.orderProducts = await this.saveOrderProducts(newOrder.orderProducts);
            orderToSave.totalPrice = newOrder.totalPrice;
            return await this.orderRepository.save(orderToSave);
        });
    }
    getOrderById(id) {
        return this.orderRepository.findOneBy({ id });
    }
};
OrdersDataService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [order_repository_1.OrderRepository,
        order_products_repository_1.OrderProductRepository,
        product_repository_1.ProductRepository,
        typeorm_1.DataSource])
], OrdersDataService);
exports.OrdersDataService = OrdersDataService;
//# sourceMappingURL=orders-data.service.js.map