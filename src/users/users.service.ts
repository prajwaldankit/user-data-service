import { Injectable } from '@nestjs/common';

import { User } from './interfaces/user.interface';
import * as csvServices from './../common/csv';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users: User[];
  private filePath: string;
  constructor() {
    this.users = [];
    this.populateUsers();
  }

  async populateUsers(): Promise<User[]> {
    const usersFromCsv = await csvServices.populateUsers();
    this.users = usersFromCsv;
    return this.users;
  }

  async findAllUsers(): Promise<User[]> {
    csvServices.populateUsers();
    return this.users;
  }

  async createNewUser(data: UserDto): Promise<User> {
    this.populateUsers();
    const userIndex: number = this.users.length;

    await csvServices
      .addNewUserToCsv(userIndex, data)
      .then(() => this.populateUsers());
    return this.users[userIndex];
  }

  findOneUser(id: string): User {
    return this.users[Number(id)];
  }
}
