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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersController = void 0;
const common_1 = require("@nestjs/common");
const date_helpers_1 = require("../shared/helpers/date.helpers");
const create_order_dto_1 = require("./dto/create-order.dto");
const orders_data_service_1 = require("./orders-data.service");
let OrdersController = class OrdersController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async getOrderById(id) {
        return this.mapOrderToExternal(await this.orderService.getOrderById(id));
    }
    async getAllOrders() {
        const ordersArray = await this.orderService.getAllOrders();
        return ordersArray.map((elm) => this.mapOrderToExternal(elm));
    }
    async addOrder(item) {
        return await this.orderService.addOrder(item);
    }
    mapOrderToExternal(order) {
        return Object.assign(Object.assign({}, order), { createdAt: (0, date_helpers_1.dateToArray)(order.createdAt), orderProducts: order.orderProducts.map((elm) => {
                const orderProduct = {
                    id: elm.id,
                    productId: elm.product.id,
                    productName: elm.product.name,
                    count: elm.count,
                    price: elm.price,
                    addInfo: elm.addInfo,
                    orderId: order.id,
                };
                return orderProduct;
            }) });
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe({ version: '4' }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getOrderById", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getAllOrders", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_dto_1.CreateOrderDto]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "addOrder", null);
OrdersController = __decorate([
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [orders_data_service_1.OrdersDataService])
], OrdersController);
exports.OrdersController = OrdersController;
//# sourceMappingURL=orders.controller.js.map