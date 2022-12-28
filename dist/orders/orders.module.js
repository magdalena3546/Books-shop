"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersModule = void 0;
const common_1 = require("@nestjs/common");
const orders_controller_1 = require("./orders.controller");
const orders_data_service_1 = require("./orders-data.service");
const typeorm_1 = require("@nestjs/typeorm");
const order_products_repository_1 = require("./db/order-products.repository");
const order_repository_1 = require("./db/order.repository");
const product_repository_1 = require("../products/db/product.repository");
let OrdersModule = class OrdersModule {
};
OrdersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([order_repository_1.OrderRepository, order_products_repository_1.OrderProductRepository]),
        ],
        controllers: [orders_controller_1.OrdersController],
        providers: [
            orders_data_service_1.OrdersDataService,
            order_repository_1.OrderRepository,
            product_repository_1.ProductRepository,
            order_products_repository_1.OrderProductRepository,
        ],
    })
], OrdersModule);
exports.OrdersModule = OrdersModule;
//# sourceMappingURL=orders.module.js.map