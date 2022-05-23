import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  password: string;
}
