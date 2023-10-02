import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';
import { birdhouseProviders } from './models/birdhouse.providers';
import { Birdhouse } from "./models/birdhouse.entity";

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'birdhouses',
        entities: [Birdhouse],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders, ...birdhouseProviders],
  exports: [...databaseProviders],
})
export class AppModule {}
