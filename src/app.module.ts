import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//SRP
import { ProductsModule } from './modules/SRP/products/products.module';
import { OrdersModule } from './modules/SRP/orders/orders.module';
import { OrdersModule as LSPOrdersModule } from './modules/LSP/orders/orders.module';

import { OrdersModule as OrdersModuleOCP } from './modules/OCP/orders/orders.module';
import { NotificationModule } from './modules/ISP/notification/notification.module';
//import { PaymentService } from './modules/OCP/payment/payment.service';
//import { PaymentModule } from './modules/OCP/payment/payment.module';
@Module({
  imports: [ProductsModule, OrdersModule, OrdersModuleOCP, LSPOrdersModule, NotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }