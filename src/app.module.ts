import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import * as cors from 'cors';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig as config } from './ormconfig';
import { ConnectionOptions } from 'typeorm';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ProductsModule,
    OrdersModule,
    UsersModule,
    TypeOrmModule.forRoot(config as ConnectionOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors()).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
