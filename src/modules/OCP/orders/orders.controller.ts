import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { IsNumber } from 'class-validator';
import { PaymentService } from '../payment/payment.service';
import { CreditCardGateway, PAYMENT_METHOD, PayPalGateway } from '../payment/payment.gateway';

class SubmitOrderDto {
    @IsNumber()
    productId: number;
}

@Controller('/ocp/orders')
export class OrdersController {
    constructor(private paymentService: PaymentService, private ordersService: OrdersService) {
        this.paymentService.registerPaymentGateway(
            PAYMENT_METHOD.CREDIT_CARD,
            new CreditCardGateway(),
        );

        this.paymentService.registerPaymentGateway(
            PAYMENT_METHOD.PAYPAL,
            new PayPalGateway(),
        );
    }

    @Post()
    public async submitOrder(@Body() submitOrderDto: SubmitOrderDto) {
        const createdOrder = await this.ordersService.submitOrder({
            products: { connect: [{ productId: submitOrderDto.productId }] },
        });

        const transactionId = await this.paymentService.processPayment(
            createdOrder.products.connect[0].productId,
            PAYMENT_METHOD.PAYPAL);

        console.log("transactionId ", transactionId);

        return {
            message: 'Thanks for you order!',
            orderNumber: createdOrder.products.connect[0].productId,
            transactionId: transactionId
        };
    }

}