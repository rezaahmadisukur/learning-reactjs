import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './auth.guard';
import { Roles } from 'src/roles/role.decorator';
import { Role } from 'src/roles/role.enum';
import { RolesGuard } from 'src/roles/roles.guard';

interface RequestWithUser extends Request {
  user: {
    id: number;
    email: string;
  };
}
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

  @Post('/login')
  async login(
    @Body()
    loginDto: LoginDto,
  ) {
    return await this.userService.login(loginDto);
  }

  @Get('/profile')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.User)
  getProfile(@Request() req: RequestWithUser) {
    return req.user;
  }
}
