import {Amenity, City, OfferType} from '../../../types/index.js';

export class UpdateOfferDto {
  public title?: string;
  public description?: string;
  public postDate?: Date;
  public city?: City;
  public previewImage?: string;
  public photos?: string[];
  public premium?: boolean;
  public favorite?: boolean;
  public rating?: number;
  public type?: OfferType;
  public roomCount?: number;
  public guestCount?: number;
  public price?: number;
  public amenities?: Amenity[];
  public latitude?: number;
  public longitude?: number;
}
