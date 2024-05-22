import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as sqlite3 from 'sqlite3';
import { UsersService } from './database/users/users.service';
import * as bodyParser from 'body-parser';
import * as fs from 'fs';


async function bootstrap() {

  const httpsOptions = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
  };

  const app = await NestFactory.create(AppModule);
   app.enableCors({
    origin:'*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept',
   })
   app.use(bodyParser.json({limit: '50mb'}));
   app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
   const usersService = app.get(UsersService);
   await usersService.addDefaultUserIfNeeded();

  

  await app.listen(3001);
}
bootstrap();
