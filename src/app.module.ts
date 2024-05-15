import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './database/users/users.module';
import { DatabaseModule } from './database/database.module';
import { ProvidersModule } from './database/providers/providers.module';


@Module({
  imports: [DatabaseModule, UsersModule, ProvidersModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept',
        );
        next();
      })
      .forRoutes({path: '*', method: RequestMethod.ALL})
  }
}
