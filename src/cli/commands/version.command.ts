import {Command} from './command.interface.js';
import {version} from '../../../package.json';
import chalk from 'chalk';

export class VersionCommand implements Command {
  constructor(private readonly file: string = 'package.json') {}

  private readVersion(): string {
    if (!version) {
      throw new Error(`Failed to import version from ${this.file}.`);
    }

    return version;
  }

  public getName(): string {
    return '--version';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    try {
      const v = this.readVersion();
      console.info(chalk.green(v));
    } catch (error: unknown) {
      console.error(`Failed to read version from ${this.file}`);

      if (error instanceof Error) {
        console.error(chalk.red(error.message));
      }
    }
  }
}
