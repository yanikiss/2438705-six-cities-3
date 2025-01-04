import {OfferGenerator} from './offer-generator.interface.js';
import {MockServerData, OfferType, UserType} from '../../types/index.js';
import {generateRandomValue, getRandomItem, getRandomItems} from '../../helpers/index.js';
import dayjs from 'dayjs';


export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);

    const postDate = dayjs()
      .subtract(generateRandomValue(1, 7), 'day')
      .toISOString();

    const previewImage = getRandomItem<string>(this.mockData.previewImages);
    const images = getRandomItems<string>(this.mockData.photos).join(';');
    const isPremium = getRandomItem<string>(['true', 'false']);
    const isFavorite = getRandomItem<string>(['true', 'false']);
    const rating = generateRandomValue(1, 5, 1).toString();
    const type = getRandomItem([
      OfferType.Apartment,
      OfferType.Hotel,
      OfferType.House,
      OfferType.Room
    ]);
    const bedrooms = generateRandomValue(1, 8).toString();
    const maxAdults = generateRandomValue(1, 10).toString();
    const price = generateRandomValue(100, 100000).toString();
    const name = getRandomItem<string>(this.mockData.names);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatarUrl = getRandomItem<string>(this.mockData.avatars);
    const userType = getRandomItem([
      UserType.Regular,
      UserType.Pro
    ]);
    const coordinates = getRandomItem<string>(this.mockData.coordinates);

    return [
      title,
      description,
      postDate,
      previewImage,
      images,
      isPremium,
      isFavorite,
      rating,
      type,
      bedrooms,
      maxAdults,
      price,
      name,
      email,
      avatarUrl,
      userType,
      coordinates
    ].join('\t');
  }
}
