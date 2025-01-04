import {IsNumber, IsString, Length, Max, Min} from 'class-validator';
import {CreateCommentMessage} from './create-comment.message.js';

export class CreateCommentDto {
  @IsString({message: CreateCommentMessage.comment.invalidFormat})
  @Length(5, 1024, {message: CreateCommentMessage.comment.lengthField})
  public comment: string;

  @Min(1, {message: CreateCommentMessage.rating.minValue})
  @Max(5, {message: CreateCommentMessage.rating.maxValue})
  @IsNumber({}, {message: CreateCommentMessage.rating.invalidFormat})
  public rating: number;

  public offerId: string;

  public user: string;
}
