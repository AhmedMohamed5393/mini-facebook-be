import { Module } from '@nestjs/common';
import * as env from "./environment";
import { AppController } from './app.component';
import { UserModule } from './app/user/user.module';
@Module({
    imports: [
        UserModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
