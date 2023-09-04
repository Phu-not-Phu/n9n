import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

//Providers
import { IUserAuthService } from 'src/models/auth.model';
import { UserAuthService } from './services/auth.service';
import { UsersModule } from 'src/domains/users/users.module';

//Guard
import { AuthGuard } from 'src/core/guards/auth.guard';

//Middleware
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [UsersModule],
  providers: [
    AuthGuard,
    {
      provide: IUserAuthService,
      useClass: UserAuthService,
    },
  ],
  exports: [AuthGuard, IUserAuthService],
})
export class CoreModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
