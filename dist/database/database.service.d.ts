export declare class DatabaseService {
    private db;
    constructor();
    query(sql: string, params?: any[]): Promise<any[]>;
    runQuery(sql: string, params?: any[]): Promise<void>;
    getQuery(sql: string, params?: any[]): Promise<any>;
}
