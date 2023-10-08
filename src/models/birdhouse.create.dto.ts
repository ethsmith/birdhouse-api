import { Length } from 'class-validator';

export class BirdhouseCreateDto {
  longitude: number;

  latitude: number;

  @Length(4, 16)
  name: string;
}
