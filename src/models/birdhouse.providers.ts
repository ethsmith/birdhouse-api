import { DataSource } from 'typeorm';
import { Birdhouse } from './birdhouse.entity';

export const birdhouseProviders = [
  {
    provide: 'BIRDHOUSE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Birdhouse),
    inject: ['DATA_SOURCE'],
  },
];
