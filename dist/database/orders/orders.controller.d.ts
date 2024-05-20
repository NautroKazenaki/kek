import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    getOrders(): Promise<any[]>;
    addOrder(body: any): Promise<any[]>;
    deleteOrder(id: string): Promise<any[]>;
    getManufacturingStatus(body: any): Promise<any[]>;
    getOrderById(body: any): Promise<any[]>;
}
