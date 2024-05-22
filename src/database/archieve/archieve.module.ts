import {Module} from '@nestjs/common';
import {ArchieveController} from './archieve.controller';
import {ArchieveService} from './archieve.service';
import {DatabaseModule} from "../database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [ArchieveController],
    providers: [ArchieveService]
})
export class ArchieveModule {}