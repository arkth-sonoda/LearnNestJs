import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UsersService {
  private users: User[] = [];
  findAll(): User[] {
    return this.users;
  }

  create(createUserDto: CreateUserDto) {
    const user: User = {
      id: uuid(),
      ...createUserDto,
    };
    this.users.push(user);
    return user;
  }

  delete(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
