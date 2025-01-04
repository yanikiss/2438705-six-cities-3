import {DocumentType} from '@typegoose/typegoose';
import {OfferEntity} from './offer.entity.js';
import {UpdateOfferDto} from './dto/update-offer.dto.js';
import {City, DocumentExists, Location, OfferType} from '../../types/index.js';

export interface OfferService extends DocumentExists {
  create(dto: {
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
  }): Promise<DocumentType<OfferEntity>>;
  findById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  find(count?: number): Promise<DocumentType<OfferEntity>[]>;
  deleteById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  updateById(offerId: string, dto: UpdateOfferDto): Promise<DocumentType<OfferEntity> | null>;
  incCommentCount(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  exists(documentId: string): Promise<boolean>;
  findPremiumByCity(city: string): Promise<DocumentType<OfferEntity>[] | null>;
  findFavorite(): Promise<DocumentType<OfferEntity>[] | null>;
  addFavorite(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  removeFavorite(offerId: string): Promise<DocumentType<OfferEntity> | null>;
}
