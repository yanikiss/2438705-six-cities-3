import {UserType} from '../../../types/index.js';
import {IsEmail, IsEnum, IsString, Length} from 'class-validator';
import {CreateUserMessage} from './create-user.message.js';

export class CreateUserDto {
  @IsString({message: CreateUserMessage.name.invalidFormat})
  @Length(1, 15, {message: CreateUserMessage.name.lengthField})
  public name: string;

  @IsEmail({}, {message: CreateUserMessage.email.invalidFormat})
  public email: string;

  @IsEnum(UserType, {message: CreateUserMessage.type.invalidFormat})
  public type: UserType;

  @IsString({message: CreateUserMessage.password.invalidFormat})
  @Length(6, 12, {message: CreateUserMessage.password.lengthField})
  public password: string;
}
