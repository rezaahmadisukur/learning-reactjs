import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/signup')
  create(
    @Body()
    createUserDto: CreateUserDto,
  ) {
    //firtsName, lastName, email, password, createdAt
    return this.userService.singup(createUserDto);
  }
}
