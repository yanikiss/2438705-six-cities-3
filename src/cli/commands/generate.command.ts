import {Command} from './command.interface.js';
import {MockServerData} from '../../shared/types/index.js';
import got from 'got';
import {TSVOfferGenerator} from '../../shared/libs/offer-generator/index.js';
import {TSVFileWriter} from '../../shared/libs/file-writer/index.js';
import {getErrorMessage} from '../../shared/helpers/index.js';

export class GenerateCommand implements Command {
  private initialData: MockServerData;

  private async load(url: string) {
    try {
      this.initialData = await got.get(url).json();
    } catch {
      throw new Error(`Can't load data from ${url}`);
    }
  }

  public getName(): string {
    return '--generate';
  }

  public async execute(...parameters: string[]) {
    const [count, filepath, url] = parameters;
    const offerCount = Number.parseInt(count, 10);

    try {
      await this.load(url);
      const tsvOfferGenerator = new TSVOfferGenerator(this.initialData);
      const tsvFileWriter = new TSVFileWriter(filepath);
      for (let i = 0; i < offerCount; i++) {
        await tsvFileWriter.write(tsvOfferGenerator.generate());
      }
      console.info(`File ${filepath} was created`);
    } catch (error: unknown) {
      console.error('Can\'t generate data');

      console.error(getErrorMessage(error));
    }
  }
}
