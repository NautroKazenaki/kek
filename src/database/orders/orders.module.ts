import {Module} from '@nestjs/common'
import { DatabaseModule } from '../database.module'
import {OrdersController} from './orders.controller'
import {OrdersService} from './orders.service'

@Module({
    imports: [DatabaseModule],
    controllers: [OrdersController],
    providers: [OrdersService]
})

export class OrdersModule {}