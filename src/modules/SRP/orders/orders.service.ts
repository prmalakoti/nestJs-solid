import { Injectable } from '@nestjs/common';
import { EmailsService } from '../emails/emails.service';


@Injectable()
export class OrdersService {
    private orders: any[] = [];
    constructor(
        private emailsService: EmailsService,
    ) {
    }

    async submitOrder(data: any): Promise<any> {
        //const createdOrder = await this.prisma.order.create({ data });
        this.orders.push(data);
        //Save order on the Database
        //TODO: Add Database saving for order

        //❌ Bad
        //Here we'are sending Order email inside the OrdersService which should
        //Have one responsibility (Taking care of Orders)
        // this.emailsService.sendOrderEmail(createdOrder.orderId);

        return { ...data, mesaage: "order created successfully..." };
    }
}