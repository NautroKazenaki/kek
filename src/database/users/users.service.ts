import { Body, Injectable } from "@nestjs/common";
import * as sqlite3 from "sqlite3";
import { usersDto } from "./users.dto";
import { DatabaseService } from "../database.service";

@Injectable()
export class UsersService {
    constructor(private readonly databaseService: DatabaseService) {}

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

                await this.addUser({name, password, level})
            }
         catch (error) {
            console.error('Error adding default user:', error)
        }
    }

    async addUser(@Body() { name, password, level }: usersDto): Promise<void> {
        
           let insertResult = this.databaseService.query('INSERT INTO users (name, password, level) VALUES (?, ?, ?)', [name, password, level])
                if (insertResult) {
                    console.log('Admin added successfully:',)
                } else {
                    console.error('Admin already exist')
                    
                }
        }
    }
