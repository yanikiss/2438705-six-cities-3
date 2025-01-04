import {Expose, Type} from 'class-transformer';
import {UserRdo} from '../../user/rdo/user.rdo.js';
import {City, Location} from '../../../types/index.js';

export class OfferRdo {
  @Expose()
  public id: string;

  @Expose()
  public title: string;

  @Expose()
  public description: string;

  @Expose()
  public postDate: string;

  @Expose()
  public city: City;

  @Expose()
  public previewImage: string;

  @Expose()
  public images: string[];

  @Expose()
  public isPremium: boolean;

  @Expose()
  public isFavorite: boolean;

  @Expose()
  public rating!: 1 | 2 | 3 | 4 | 5;

  @Expose()
  public type: string;

  @Expose()
  public countRooms!: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

  @Expose()
  public maxAdults!: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

  @Expose()
  public price: number;

  @Expose({ name: 'host'})
  @Type(() => UserRdo)
  public host: UserRdo;

  @Expose()
  public commentCount: number;

  @Expose()
  public location: Location;
}
