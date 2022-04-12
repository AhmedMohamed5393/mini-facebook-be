import { UserController } from './user.controller';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
@Module({
    imports: [
        JwtModule.register({ secret: 'super-secret' }),
    ],
    controllers: [UserController],
})
export class UserModule {
    configure(consumer: MiddlewareConsumer) {}
}
