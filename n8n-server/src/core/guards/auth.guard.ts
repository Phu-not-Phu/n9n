import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { IUserAuthService } from 'src/models/auth.model';
import { UserAuthService } from 'src/core/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(@Inject(IUserAuthService) private authService: UserAuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
    } catch (error) {
      throw new UnauthorizedException();
    }

    const payload = this.authService.decodeToken(token);
    request['user'] = payload;

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.get('Authorization').split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
