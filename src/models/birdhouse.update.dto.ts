import { Length } from 'class-validator';

export class BirdhouseUpdateDto {
  longitude: number;

  latitude: number;

  @Length(4, 16)
  name: string;
}
