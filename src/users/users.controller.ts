import { Controller, Get, Post, HttpCode, Body, Param } from '@nestjs/common';

import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAllUsers(): Promise<User[]> {
    const users = await this.usersService.findAllUsers();
    return users;
  }

  @Get(':id')
  findOneUser(@Param('id') id: string): User {
    return this.usersService.findOneUser(id);
  }

  @Post()
  @HttpCode(201)
  async createNewUser(@Body() createUserDto: UserDto): Promise<User> {
    const response = await this.usersService.createNewUser(createUserDto);
    return response;
  }
}
