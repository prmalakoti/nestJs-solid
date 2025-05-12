import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
    constructor() { }

    public async findOne(orderId: number): Promise<any> {
        return { totalPrice: 100 }
    }
}