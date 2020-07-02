import * as csvtojson from 'csvtojson';
import * as path from 'path';
import * as fs from 'fs';

import { UserDto } from './../users/dto/user.dto';
import { User } from './../users/interfaces/user.interface';

const filePath = path.join(__dirname, '../../');

export async function populateUsers(): Promise<User[]> {
  const usersJson = await csvtojson().fromFile(
    path.join(filePath, 'assets/users.csv'),
  );

  return usersJson;
}

export function generateCsvFromJson(userIndex: number, data: UserDto): string {
  return `${userIndex},${data.name},${data.gender},${data.phone},${data.email},${data.address},${data.nationality},${data.dob},${data.edBackground},${data.modeOfContact}\n`;
}

export async function addNewUserToCsv(
  userIndex: number,
  data: UserDto,
): Promise<any> {
  const newUserData = generateCsvFromJson(userIndex, data);
  fs.appendFile(path.join(filePath, 'assets/users.csv'), newUserData, err => {
    if (err) throw err;
    console.log('the new user data was added');
  });
  return {};
}
