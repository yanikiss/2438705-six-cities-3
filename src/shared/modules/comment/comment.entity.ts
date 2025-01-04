import {defaultClasses, getModelForClass, modelOptions, prop, Ref} from '@typegoose/typegoose';
import {OfferEntity} from '../offer/index.js';
import {UserEntity} from '../user/index.js';

export interface CommentEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'comments'
  }
})
export class CommentEntity extends defaultClasses.TimeStamps {
  @prop({
    trim: true,
    required: true,
    type: () => String
  })
  public comment: string;

  // @prop({
  //   required: true,
  //   type: () => Date
  // })
  // public date: Date;

  @prop({
    required: true,
    type: () => Number
  })
  public rating: number;

  @prop({
    ref: OfferEntity,
    required: true,
    type: () => String
  })
  public offerId: Ref<OfferEntity>;

  @prop({
    ref: UserEntity,
    required: true,
    type: () => String
  })
  public user: Ref<UserEntity>;
}

export const CommentModel = getModelForClass(CommentEntity);
