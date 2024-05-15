import {Module} from '@nestjs/common';
import {AcceptanceController} from './acceptance.controller';
import {AcceptanceService} from './acceptance.service';
import { DatabaseModule } from '../database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [AcceptanceController],
    providers: [AcceptanceService],
})

export class AcceptanceModule {}