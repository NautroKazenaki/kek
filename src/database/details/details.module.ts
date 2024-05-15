import {Module} from '@nestjs/common';
import {DetailsController} from './details.controller';
import {DetailsService} from './details.service';
import {DatabaseModule} from "../database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [DetailsController],
    providers: [DetailsService],
})

export class DetailsModule {}