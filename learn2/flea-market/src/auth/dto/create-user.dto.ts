import { IsEnum, IsString, MaxLength, MinLength } from 'class-validator';
import { UserStatus } from '../user-status.enum';

export class CreateUserDto {
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  password: string;

  @IsEnum(UserStatus)
  status: UserStatus;
}
