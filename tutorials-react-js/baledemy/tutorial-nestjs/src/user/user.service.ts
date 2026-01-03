import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash } from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async register(dto: CreateUserDto) {
    const newUser = await this.prisma.user.create({
      data: {
        ...dto,
        password: await hash(dto.password, 10),
      },
    });

    // const { password, ...user } = newUser; // bisa kayak gini atau
    const { name, email, active, createdAt, updatedAt } = newUser;
    const user = {
      name: name,
      email: email,
      active: active,
      createdAt: createdAt,
      updatedAt: updatedAt,
    };

    return user;
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  async findById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    // Bisa pake handle error nya pake ini diservice atau di controller
    // if (!user) {
    //   throw new NotFoundException('user not found');
    // }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
