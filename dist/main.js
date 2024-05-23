"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const users_service_1 = require("./database/users/users.service");
const bodyParser = require("body-parser");
const fs = require("fs");
async function bootstrap() {
    const httpsOptions = {
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem'),
    };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { httpsOptions });
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type, Accept',
    });
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    const usersService = app.get(users_service_1.UsersService);
    await usersService.addDefaultUserIfNeeded();
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map