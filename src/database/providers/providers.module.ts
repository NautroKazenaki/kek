import {Module} from '@nestjs/common'
import {DatabaseModule} from '../database.module'
import {ProvidersController} from './providers.controller'
import {ProvidersService} from './providers.service'

@Module({
    imports: [DatabaseModule],
    controllers: [ProvidersController],
    providers: [ProvidersService],
})

export class ProvidersModule {}