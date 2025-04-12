import { Injectable } from '@nestjs/common';



@Injectable()
export class OrdersService {
    private orders: any[] = [];
    constructor(
    ) {
    }

    async submitOrder(data: any): Promise<any> {
        //const createdOrder = await this.prisma.order.create({ data });
        this.orders.push(data);
        //Save order on the Database
        //TODO: Add Database saving for order
        return { ...data, mesaage: "order created successfully..." };
    }
}