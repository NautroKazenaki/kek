import {Module} from '@nestjs/common';
import {ProductsInDevelopmentController} from './productsInDevelopment.controller';
import {ProductsInDevelopmentService} from './productsInDevelopment.service';
import {DatabaseModule} from "../database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [ProductsInDevelopmentController],
    providers: [ProductsInDevelopmentService],
    exports: [ProductsInDevelopmentService]
})

export class ProductsInDevelopmentModule {}