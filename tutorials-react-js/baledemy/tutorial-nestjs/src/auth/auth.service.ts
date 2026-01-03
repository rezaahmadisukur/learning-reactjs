import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async login(dto: AuthDto) {
    const userExists = await this.userService.findByEmail(dto.email);

    if (!userExists) {
      throw new UnauthorizedException('User or Password not match');
    }

    const matchPassword = await compare(dto.password, userExists.password);

    if (!matchPassword) {
      throw new UnauthorizedException('User or Password not match');
    }

    const { id, email } = userExists;
    const payload = { sub: id, username: email };

    const userToken = {
      access_token: await this.jwtService.signAsync(payload, {
        secret:
          'z5Y6VFgKtZPmpHD6jV9zRHur44YcHzO6DEptBM4Gd2hr1dIOshWx2I8zeO4c3+P0KnU=',
        expiresIn: '60s',
      }),
    };

    return userToken;
  }
}
