import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { SignupResponse } from './types/user.type';
import bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

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

  async encryptPassword(
    plainText: string,
    saltRounds: number,
  ): Promise<string> {
    return await bcrypt.hash(plainText, saltRounds);
  }
}
