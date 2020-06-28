import {
  Controller,
  Get,
  Post,
  Req,
  HttpCode,
  Param,
  Body,
} from '@nestjs/common';

import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  @Get()
  findAllUsers(): string {
    return 'all the data from csv is displayed here.';
  }

  @Get(':id')
  findOneUser(@Param() params): string {
    return `find a user with id ${params.id} `;
  }

  @Post()
  @HttpCode(201)
  createNewUser(@Body() creaateUserDto: UserDto): object {
    console.log(creaateUserDto);
    return { message: creaateUserDto };
  }
}
