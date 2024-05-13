import { Injectable } from "@nestjs/common";
import * as sqlite3 from "sqlite3";

@Injectable()
export class DatabaseService {
    private db: sqlite3.Database;

    constructor() {
        this.db = new sqlite3.Database('database.db')
    }

    query(sql: string, params: any[] = []): Promise<any[]> {
        console.log(params)
        return new Promise((resolve, reject) => {
            this.db.all(sql,params, (err, rows) => {
                if (err) {
                    reject (err)
                } else {
                    console.log(rows)
                    resolve(rows)
                }
            } )
        })
    }
}