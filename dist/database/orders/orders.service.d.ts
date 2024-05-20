import { DatabaseService } from '../database.service';
export declare class OrdersService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    getOrders(): Promise<any[]>;
    addOrder(body: any): Promise<any[]>;
    deleteOrder(id: string): Promise<any[]>;
    getManufacturingStatus(body: any): Promise<any[]>;
    getOrderById(body: any): Promise<any[]>;
}
