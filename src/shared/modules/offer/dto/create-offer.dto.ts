import {City, OfferType, Location} from '../../../types/index.js';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNumber, IsObject,
  Max,
  MaxLength,
  Min,
  MinLength
} from 'class-validator';
import {CreateOfferValidationMessage} from './create-offer.message.js';

export class CreateOfferDto {
  @MinLength(10, {message: CreateOfferValidationMessage.title.minLength})
  @MaxLength(100, {message: CreateOfferValidationMessage.title.maxLength})
  public title: string;

  @MinLength(20, {message: CreateOfferValidationMessage.description.minLength})
  @MaxLength(1024, {message: CreateOfferValidationMessage.description.maxLength})
  public description: string;

  @IsObject({message: CreateOfferValidationMessage.city.invalid})
  public city: City;

  public previewImage: string;

  @IsArray({message: CreateOfferValidationMessage.images.invalidFormat})
  public images: string[];

  @IsBoolean({message: CreateOfferValidationMessage.isPremium.invalidFormat})
  public isPremium: boolean;

  @IsEnum(OfferType, {message: CreateOfferValidationMessage.type.invalid})
  public type: OfferType;

  @IsNumber({}, {message: CreateOfferValidationMessage.countRooms.invalidFormat})
  public countRooms!: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

  @IsNumber({}, {message: CreateOfferValidationMessage.maxAdults.invalidFormat})
  public maxAdults!: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

  @Min(100, {message: CreateOfferValidationMessage.price.minValue})
  @Max(1000000, {message: CreateOfferValidationMessage.price.maxValue})
  @IsNumber({}, {message: CreateOfferValidationMessage.price.invalidFormat})
  public price: number;

  public host: string;

  @IsObject({message: CreateOfferValidationMessage.location.invalidFormat})
  public location: Location;
}
