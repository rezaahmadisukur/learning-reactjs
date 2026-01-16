import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Post('/signup')
  create(
    @Body()
    createUserDto: CreateUserDto,
  ) {
    //firtsName, lastName, email, password, createdAt
    return createUserDto;
  }
}
