import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { BirdhouseCreateDto } from './models/birdhouse.create.dto';
import { Birdhouse } from './models/birdhouse.entity';
import { BirdhouseUpdateDto } from './models/birdhouse.update.dto';
import { BirdhouseResidencyUpdateDto } from './models/birdhouse-residency.update.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body() body: BirdhouseCreateDto): Promise<Birdhouse> {
    return this.appService.create(body);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: BirdhouseUpdateDto) {
    await this.appService.update(id, body);
    return this.appService.find(id);
  }

  @Post(':id/residency')
  async updateResidency(
    @Param('id') id: string,
    @Body() body: BirdhouseResidencyUpdateDto,
  ) {
    await this.appService.updateResidency(id, body);
    return this.appService.find(id);
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<Birdhouse> {
    return this.appService.find(id);
  }
}
