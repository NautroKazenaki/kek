"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const users_service_1 = require("./database/users/users.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const usersService = app.get(users_service_1.UsersService);
    await usersService.addDefaultUserIfNeeded();
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map