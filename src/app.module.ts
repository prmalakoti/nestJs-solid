import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//SRP
import { ProductsModule } from './modules/SRP/products/products.module';
import { OrdersModule } from './modules/SRP/orders/orders.module';


import { OrdersModule as OrdersModuleOCP } from './modules/OCP/orders/orders.module';
//import { PaymentService } from './modules/OCP/payment/payment.service';
//import { PaymentModule } from './modules/OCP/payment/payment.module';
@Module({
  imports: [ProductsModule, OrdersModule, OrdersModuleOCP],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }