import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async loginUser(@Body() userData: { email: string; password: string }): Promise<void> {
        const { email, password } = userData;
        return await this.usersService.loginUser(email, password)
    }

    @Get()
    async findAll(): Promise<any[]> {
        return await this.usersService.findAll()
    }
}