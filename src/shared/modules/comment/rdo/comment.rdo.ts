import {Expose, Type} from 'class-transformer';
import {UserRdo} from '../../user/rdo/user.rdo.js';

export class CommentRdo {
  @Expose()
  public id: string;

  @Expose()
  public comment: string;

  @Expose()
  public rating: number;

  @Expose({name: 'createdAt'})
  public date: string;

  @Expose({name: 'user'})
  @Type(() => UserRdo)
  public user: UserRdo;
}
