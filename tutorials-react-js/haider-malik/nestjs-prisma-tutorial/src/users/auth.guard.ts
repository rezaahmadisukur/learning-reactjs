import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
// import { Observable } from 'rxjs';
import { jwtContants } from './contants';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('Auth Guard Running ....');
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeader(request);
    console.log('token received...', token);

    if (!token) {
      throw new UnauthorizedException('Username or Password wrong');
    }

    try {
      const payload = await this.jwtService.verifyAsync<{ token: string }>(
        token,
        {
          secret: jwtContants.secret,
        },
      );

      console.log('payload...', JSON.stringify(payload));

      request['user'] = payload;
    } catch (error) {
      console.error(error);
    }

    return true;
  }

  private extractTokenFromHeader(request: Request) {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
