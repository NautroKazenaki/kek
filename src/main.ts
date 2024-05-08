import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as sqlite3 from 'sqlite3';
import { UsersService } from './database/users/users.service';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    app.use(cors())
   const usersService = app.get(UsersService);
   await usersService.addDefaultUserIfNeeded();

  

  await app.listen(3001);
}
bootstrap();
