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
exports.OrderProduct = void 0;
const products_entity_1 = require("../../products/db/products.entity");
const typeorm_1 = require("typeorm");
const orders_entity_1 = require("./orders.entity");
let OrderProduct = class OrderProduct {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], OrderProduct.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => products_entity_1.Product, (product) => product.id, {
        eager: true,
    }),
    __metadata("design:type", products_entity_1.Product)
], OrderProduct.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: 0,
        type: 'float',
    }),
    __metadata("design:type", Number)
], OrderProduct.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: 1,
    }),
    __metadata("design:type", Number)
], OrderProduct.prototype, "count", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => orders_entity_1.Order, (order) => order.id),
    __metadata("design:type", orders_entity_1.Order)
], OrderProduct.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true,
    }),
    __metadata("design:type", String)
], OrderProduct.prototype, "addInfo", void 0);
OrderProduct = __decorate([
    (0, typeorm_1.Entity)({
        name: 'order_products',
    })
], OrderProduct);
exports.OrderProduct = OrderProduct;
//# sourceMappingURL=order-products.entity.js.map