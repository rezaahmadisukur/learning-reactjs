import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { SignupResponse } from './types/user.type';
import bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async singup(payload: CreateUserDto): Promise<SignupResponse> {
    const existingUser = await this.prisma.user.findFirst({
      where: {
        email: payload.email,
      },
    });

    if (existingUser) {
      throw new BadRequestException(
        'User created with the email you provided',
        {
          cause: new Error(),
          description: 'user is already registered',
        },
      );
    }

    // save the user password in encrypted - bcrypt
    const hash = await this.encryptPassword(payload.password, 10);
    // save the user in the db
    payload.password = hash;
    // return id and email
    return await this.prisma.user.create({
      data: payload,
      select: {
        email: true,
        id: true,
      },
    });
  }

  async login(loginDto: LoginDto): Promise<{ accessToken: string }> {
    // find user base on email
    const user = await this.prisma.user.findFirst({
      where: {
        email: loginDto.email,
      },
    });
    // if there is no user we can unauthorized
    if (!user) {
      throw new UnauthorizedException('Email or Password wrong');
    }
    // decrypt the user password
    const isMatched = await this.decryptPassword(
      loginDto.password,
      user.password,
    );
    // match the user provided password with decrypted
    if (!isMatched) {
      throw new UnauthorizedException('Email or Password wrong');
    }
    // if  password not matched then sedn the error invaled password
    const accessToken = await this.jwtService.signAsync(
      {
        id: user.id,
        email: user.email,
        role: user.role as string,
      },
      { expiresIn: '1d' },
    );
    // return json web token
    return { accessToken };
  }

  async encryptPassword(
    plainText: string,
    saltRounds: number,
  ): Promise<string> {
    return await bcrypt.hash(plainText, saltRounds);
  }

  async decryptPassword(plainText: string, hash: string) {
    return await bcrypt.compare(plainText, hash);
  }
}
