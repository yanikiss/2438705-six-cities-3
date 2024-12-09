import {defaultClasses, getModelForClass, modelOptions, prop, Ref} from '@typegoose/typegoose';
import {Amenity, City, OfferType} from '../../types/index.js';
import {UserEntity} from '../user/index.js';

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({
    trim: true,
    required: true,
    type: () => String,
  })
  public title: string;

  @prop({
    trim: true,
    required: true,
    type: () => String,
  })
  public description: string;

  @prop({
    required: true,
    type: () => Date,
  })
  public postDate: Date;

  @prop({
    required: true,
    type: () => String,
    enum: City
  })
  public city: City;

  @prop({
    required: true,
    type: () => String,
  })
  public previewImage: string;

  @prop({
    required: true,
    default: [],
    type: () => Array<string>,
  })
  public photos: string[];

  @prop({
    required: true,
    type: () => Boolean,
  })
  public premium: boolean;

  @prop({
    required: true,
    type: () => Boolean,
  })
  public favorite: boolean;

  @prop({
    required: true,
    type: () => Number,
  })
  public rating: number;

  @prop({
    required: true,
    type: () => String,
    enum: OfferType
  })
  public type: OfferType;

  @prop({
    required: true,
    type: () => Number,
  })
  public roomCount: number;

  @prop({
    required: true,
    type: () => Number,
  })
  public guestCount: number;

  @prop({
    required: true,
    type: () => Number,
  })
  public price: number;

  @prop({
    required: true,
    type: () => Array<string>,
  })
  public amenities: Amenity[];

  @prop({
    required: true,
    ref: UserEntity,
  })
  public userId: Ref<UserEntity>;

  @prop({
    type: () => Number,
    default: 0
  })
  public commentCount: number;

  @prop({
    required: true,
    type: () => Number,
  })
  public latitude: number;

  @prop({
    required: true,
    type: () => Number,
  })
  public longitude: number;
}

export const OfferModel = getModelForClass(OfferEntity);
