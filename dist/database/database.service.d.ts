export declare class DatabaseService {
    private db;
    constructor();
    query(sql: string, params?: any[]): Promise<any[]>;
}
