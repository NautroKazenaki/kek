import { Body, Injectable } from "@nestjs/common";
import * as sqlite3 from "sqlite3";
import { usersDto } from "./users.dto";
import { DatabaseService } from "../database.service";

@Injectable()
export class UsersService {
    constructor(private readonly databaseService: DatabaseService) { }

    async addDefaultUserIfNeeded(): Promise<void> {
        try {
            const name = 'admin';
            const password = 'Dd7560848';
            const level = 0;

            const existingUser = await this.databaseService.query('SELECT * FROM users WHERE name = ?', [name]);
            console.log(existingUser)
            if (existingUser.length > 0) {
                console.log('Admin user already exists');
                return;
            }

            await this.addUser({ name, password, level })
        }
        catch (error) {
            console.error('Error adding default user:', error)
        }
    }

    async addUser({ name, password, level }: usersDto): Promise<void> {
        try {
            let sql = 'SELECT * FROM users WHERE name = ?'
            let params = [name]
            const existingUser = await this.databaseService.query(sql, params);
            if (existingUser.length > 0) {
                throw new Error('User already exists');
            } else {
                let sql = 'INSERT INTO users (name, password, level) VALUES (?, ?, ?)'
                let params = [name, password, level]
                await this.databaseService.query(sql, params)
                console.log('User added successfully:',)
            }
        }
        catch (error) {
            console.error('Error adding user:', error)
        }
    }

    async findAll(): Promise<any[]> {
        return await this.databaseService.query('SELECT * FROM users')
    }

    async loginUser(name: string, password: string): Promise<any> {
        const sql = 'SELECT * FROM users WHERE name = ? AND password = ?';
        const params = [name, password]; // Pass email and password as parameters
        return await this.databaseService.query(sql, params);

    }

    async deleteUser(name: string): Promise<void> {
        try {
            let sql = 'DELETE FROM users WHERE name = ?'
            let params = [name]
            await this.databaseService.query(sql, params)
        } catch {
            console.error('error deleting user:', name)
        }
    }
}
