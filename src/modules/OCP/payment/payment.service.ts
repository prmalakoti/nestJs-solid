import { Injectable } from '@nestjs/common';
import { PaymentGateway, PAYMENT_METHOD } from './payment.gateway';
import { Order } from './order.interface';

@Injectable()
export class PaymentService {
    //❌ Bad
    //Everytime we add a new payment method we need to modify the code
    public badProcessPayment(order: Order, paymentMethod: string): void {
        if (paymentMethod === 'creditCard') {
            // Process credit card payment
        } else if (paymentMethod === 'paypal') {
            // Process PayPal payment
        } else if (paymentMethod === 'bitcoin') {
            // Process Bitcoin payment
        } else {
            // Handle other payment methods
        }
    }

    //--------------------------------------------------------------------------

    //✅ Good

    private paymentGateways: Record<string, PaymentGateway> = {};

    public registerPaymentGateway(
        paymentMethod: PAYMENT_METHOD,
        gateway: PaymentGateway,
    ) {
        console.log("gateway ", gateway);
        this.paymentGateways[paymentMethod] = gateway;
    }

    public async processPayment(order: Order, paymentMethod: PAYMENT_METHOD) {
        const gateway = this.paymentGateways[paymentMethod];
        if (gateway) {
            return gateway.processPayment(order);
        } else {
            throw new Error('Unsupported payment method!');
        }
    }
}