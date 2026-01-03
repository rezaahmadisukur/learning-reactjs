import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  async login(dto: AuthDto) {
    const userExists = await this.userService.findByEmail(dto.email);

    if (!userExists) {
      throw new UnauthorizedException('User or Password not match');
    }

    const matchPassword = await compare(dto.password, userExists.password);

    if (!matchPassword) {
      throw new UnauthorizedException('User or Password not match');
    }

    const { email } = userExists;

    const user = {
      user: email,
    };

    return user;
  }
}
