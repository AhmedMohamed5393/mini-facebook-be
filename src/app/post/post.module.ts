import { PostController } from './post.controller';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
@Module({
    imports: [
        JwtModule.register({ secret: 'super-secret' }),
    ],
    controllers: [PostController],
})
export class eTemplatModule {
    configure(consumer: MiddlewareConsumer) {}
}
