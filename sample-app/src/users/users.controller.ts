import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Post()
  create(
    @Body('id') id: string,
    @Body('name') name: string,
    @Body('password') password: string,
  ): User {
    const user: User = {
      id,
      name,
      password,
    };
    return this.usersService.create(user);
  }
  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.usersService.delete(id);
  }
}
