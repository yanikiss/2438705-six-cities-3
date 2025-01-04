import {OfferService} from './offer-service.interface.js';
import {inject, injectable} from 'inversify';
import {City, Component, Location, OfferType, SortType} from '../../types/index.js';
import {Logger} from '../../libs/logger/index.js';
import {DocumentType, types} from '@typegoose/typegoose';
import {OfferEntity} from './offer.entity.js';
import {UpdateOfferDto} from './dto/update-offer.dto.js';
import {DEFAULT_OFFER_COUNT, PREMIUM_OFFER_COUNT} from './offer.constant.js';

@injectable()
export class DefaultOfferService implements OfferService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.OfferModel) private readonly offerModel: types.ModelType<OfferEntity>
  ) {}

  public async create(dto: {
    images: string[];
    city: City;
    description: string;
    title: string;
    type: OfferType;
    price: number;
    host: any;
    maxAdults: number;
    countRooms: number;
    location: Location;
    isPremium: boolean;
    previewImage: string
  }): Promise<DocumentType<OfferEntity>> {
    const result = await this.offerModel.create({...dto, date: new Date(), rating: 1, isFavorite: false});
    this.logger.info(`New offer created: ${dto.title}`);

    return result.populate('host');
  }

  public async findById(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel.findById(offerId).populate('host').exec();
  }

  public async find(count?: number): Promise<DocumentType<OfferEntity>[]> {
    const limit = count ?? DEFAULT_OFFER_COUNT;
    return this.offerModel
      .find()
      .sort({createdAt: SortType.Down})
      .limit(limit)
      .populate('host')
      .exec();
  }

  public async deleteById(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
      .findByIdAndDelete(offerId)
      .exec();
  }

  public async updateById(offerId: string, dto: UpdateOfferDto): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
      .findByIdAndUpdate(offerId, dto, {new: true})
      .populate('host')
      .exec();
  }

  public async exists(documentId: string): Promise<boolean> {
    return (await this.offerModel.exists({_id: documentId})) !== null;
  }

  public async incCommentCount(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
      .findByIdAndUpdate(offerId, {
        '$inc': {
          commentCount: 1,
        }
      })
      .exec();
  }

  public async findPremiumByCity(city: string): Promise<DocumentType<OfferEntity>[] | null> {
    return this.offerModel
      .find({ isPremium: true, city })
      .sort({ createdAt: SortType.Down })
      .limit(PREMIUM_OFFER_COUNT)
      .populate('host')
      .exec();
  }

  public async findFavorite(): Promise<DocumentType<OfferEntity>[] | null> {
    return this.offerModel
      .find({ isFavorite: true })
      .populate('host')
      .exec();
  }

  public async addFavorite(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
      .findByIdAndUpdate(offerId, { isFavorite: true }, { new: true })
      .populate('host')
      .exec();
  }

  public async removeFavorite(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
      .findByIdAndUpdate(offerId, { isFavorite: false }, { new: true })
      .populate('host')
      .exec();
  }
}
