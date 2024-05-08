import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './database/users/users.module';
import { DatabaseModule } from './database/database.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [DatabaseModule ,UsersModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
