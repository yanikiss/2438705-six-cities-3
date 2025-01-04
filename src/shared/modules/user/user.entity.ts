import {User, UserType} from '../../types/index.js';
import {defaultClasses, getModelForClass, modelOptions, prop} from '@typegoose/typegoose';
import {createSHA256} from '../../helpers/index.js';

export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users'
  }
})
export class UserEntity extends defaultClasses.TimeStamps implements User {
  @prop({
    required: true,
    default: '',
    type: () => String
  })
  public name: string;

  @prop({
    unique: true,
    required: true,
    type: () => String
  })
  public email: string;

  @prop({
    required: false,
    type: () => String
  })
  public avatarUrl?: string;

  @prop({
    required: true,
    type: () => String,
    enum: UserType
  })
  public type: UserType;

  @prop({
    required: true,
    default: '',
    type: () => String
  })
  private password?: string;

  constructor(userData: User) {
    super();

    this.name = userData.name;
    this.email = userData.email;
    this.avatarUrl = userData.avatarUrl;
    this.type = userData.type;
  }

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public verifyPassword(password: string, salt: string) {
    const hashPassword = createSHA256(password, salt);
    return hashPassword === this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);
