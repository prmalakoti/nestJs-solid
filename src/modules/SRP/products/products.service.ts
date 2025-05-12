import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    findAll(): any[] {
        return [{
            id: 1,
            product: "MacBook-Air",
            price: "96k",
            qty: 1,
            Description: "16GB RAM 500 SSD"
        }];
    }
}