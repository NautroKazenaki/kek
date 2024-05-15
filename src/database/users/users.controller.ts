import { Body, Controller, Get, Param, Post, Delete } from "@nestjs/common";
import { UsersService } from "./users.service";
import { error } from "console";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async loginUser(@Body() userData: { name: string; password: string }): Promise<void> {
        const { name, password } = userData;
        return await this.usersService.loginUser(name, password)
    }
    @Post(':name')
    async addUser(@Param('name') name: string,  @Body() userData: {  password: string; level: number }): Promise<void> {
        const {  password, level } = userData;
       try {
            await this.usersService.addUser({ name, password, level })
            console.log('User added successfully')
       } catch (error) {
        console.error('User already exist:' + error)
       }
    }

    @Delete(':name')
    async deleteUser(@Param('name') name: string): Promise<void> {
        try {
            await this.usersService.deleteUser(name)
            console.log('User deleted successfully:' + name)
        } catch (error) {
            console.error('User not found:' + error)
        }
    }

    @Get()
    async findAll(): Promise<any[]> {
        return await this.usersService.findAll()
    }
}