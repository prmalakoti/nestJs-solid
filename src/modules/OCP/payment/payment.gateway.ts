import { Order } from "./order.interface";
import { v4 as uuid } from "uuid";

// ✅ Good
//Extending the payment service without modifying existing code (Open-Closed Principle)
export abstract class PaymentGateway {
    abstract processPayment(order: Order): void;
}

export class CreditCardGateway implements PaymentGateway {
    processPayment(order: Order): void {

        console.log(`payment received via crdit card of order id: ${order}`);
        // Process credit card payment
    }
}

export class PayPalGateway implements PaymentGateway {
    processPayment(order: Order): string {
        // Process PayPal payment
        console.log(`payment received via paypal of order id: ${order}`);
        return uuid();
    }
}

export class BitcoinGateway implements PaymentGateway {
    processPayment(order: Order): void {
        // Process Bitcoin payment
    }
}

//Maybe you want to add support for a new payment Method 🤔 👇
export class ApplePayGateway implements PaymentGateway {
    processPayment(order: Order): void {
        // Process ApplePay payment
    }
}

export enum PAYMENT_METHOD {
    CREDIT_CARD = 'credit-card',
    PAYPAL = 'paypal',
    Bitcoin = 'bitcoin',
}