import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {OrdersService} from './orders.service'

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Get()
    async getOrders(): Promise<any[]> {
        return this.ordersService.getOrders()
    }
    @Post()
    async addOrder(@Body() body: any): Promise<any[]> {
        return await this.ordersService.addOrder(body)
    }
    @Delete(':id')
    async deleteOrder(@Param('id') id: string): Promise<any[]> {
        return await this.ordersService.deleteOrder(id)
    }
}