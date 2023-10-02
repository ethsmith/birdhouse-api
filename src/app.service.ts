import { Inject, Injectable } from '@nestjs/common';
import { BirdhouseCreateDto } from './models/birdhouse.create.dto';
import { Birdhouse } from './models/birdhouse.entity';
import { BirdhouseUpdateDto } from './models/birdhouse.update.dto';
import { Repository, UpdateResult } from 'typeorm';
import { BirdhouseResidencyUpdateDto } from './models/birdhouse-residency.update.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('BIRDHOUSE_REPOSITORY')
    private birdhouseRepository: Repository<Birdhouse>,
  ) {}

  async create(body: BirdhouseCreateDto): Promise<Birdhouse> {
    const birdhouse = this.birdhouseRepository.create(body);
    return this.birdhouseRepository.save(birdhouse);
  }

  async update(id: string, body: BirdhouseUpdateDto): Promise<UpdateResult> {
    return this.birdhouseRepository.update(id, body);
  }

  async updateResidency(
    id: string,
    body: BirdhouseResidencyUpdateDto,
  ): Promise<UpdateResult> {
    return this.birdhouseRepository.update(id, body);
  }

  async find(id: string): Promise<Birdhouse> {
    return this.birdhouseRepository.findOne({
      where: { id: id },
    });
  }
}
