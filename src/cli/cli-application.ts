import { Command } from './commands/command.interface.js';
import { CommandParser } from './command-parser.js';

export class CLIApplication {
  private readonly commands: Map<string, Command> = new Map();

  constructor(private readonly defaultCommand: string = '--help') {}

  public registerCommands(commandList: Command[]): void {
    commandList.forEach((command) => {
      const commandName = command.getName();
      if (this.commands.has(commandName)) {
        throw new Error(`Command "${commandName}" is already registered.`);
      }
      this.commands.set(commandName, command);
    });
  }

  public getCommand(commandName: string): Command {
    return this.commands.get(commandName) ?? this.getDefaultCommand();
  }

  public getDefaultCommand(): Command {
    const defaultCommand = this.commands.get(this.defaultCommand);

    if (!defaultCommand) {
      throw new Error(`The default command "${this.defaultCommand}" is not registered.`);
    }
    return defaultCommand;
  }

  public processCommand(argv: string[]): void {
    const parsedCommand = CommandParser.parse(argv);
    const [commandName, commandArguments = []] = Object.entries(parsedCommand)[0] ?? [];

    if (!commandName) {
      return;
    }

    const command = this.getCommand(commandName);
    command.execute(...commandArguments);
  }
}
