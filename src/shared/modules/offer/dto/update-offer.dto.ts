import {City, OfferType, Location} from '../../../types/index.js';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNumber, IsObject,
  IsOptional,
  Max,
  MaxLength,
  Min,
  MinLength
} from 'class-validator';
import {UpdateOfferValidationMessage} from './update-offer.message.js';

export class UpdateOfferDto {
  @IsOptional()
  @MinLength(10, {message: UpdateOfferValidationMessage.title.minLength})
  @MaxLength(100, {message: UpdateOfferValidationMessage.title.maxLength})
  public title?: string;

  @IsOptional()
  @MinLength(20, {message: UpdateOfferValidationMessage.description.minLength})
  @MaxLength(1024, {message: UpdateOfferValidationMessage.description.maxLength})
  public description?: string;

  @IsOptional()
  @IsDateString({}, {message: UpdateOfferValidationMessage.postDate.invalidFormat})
  public postDate?: Date;

  @IsOptional()
  @IsObject({message: UpdateOfferValidationMessage.city.invalid})
  public city?: City;

  @IsOptional()
  public previewImage?: string;

  @IsOptional()
  @IsArray({message: UpdateOfferValidationMessage.images.invalidFormat})
  public images?: string[];

  @IsOptional()
  @IsBoolean({message: UpdateOfferValidationMessage.isPremium.invalidFormat})
  public isPremium?: boolean;

  @IsOptional()
  @IsBoolean({message: UpdateOfferValidationMessage.isFavorite.invalidFormat})
  public isFavorite?: boolean;

  @IsOptional()
  @IsNumber({maxDecimalPlaces: 1}, {message: UpdateOfferValidationMessage.rating.invalidFormat})
  public rating?: 1 | 2 | 3 | 4 | 5;

  @IsOptional()
  @IsEnum(OfferType, {message: UpdateOfferValidationMessage.type.invalid})
  public type?: OfferType;

  @IsOptional()
  @IsNumber({}, {message: UpdateOfferValidationMessage.countRooms.invalidFormat})
  public bedrooms?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

  @IsOptional()
  @IsNumber({}, {message: UpdateOfferValidationMessage.maxAdults.invalidFormat})
  public maxAdults?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

  @IsOptional()
  @Min(100, {message: UpdateOfferValidationMessage.price.minValue})
  @Max(1000000, {message: UpdateOfferValidationMessage.price.maxValue})
  @IsNumber({}, {message: UpdateOfferValidationMessage.price.invalidFormat})
  public price?: number;

  @IsOptional()
  @IsNumber({}, {message: UpdateOfferValidationMessage.location.invalidFormat})
  public location?: Location;
}
