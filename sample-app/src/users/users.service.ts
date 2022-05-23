import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {
  private users: User[] = [];
  findAll(): User[] {
    return this.users;
  }

  create(user: User) {
    this.users.push(user);
    return user;
  }

  delete(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
