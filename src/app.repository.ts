import { Birdhouse } from './models/birdhouse.entity';
import { BirdhouseUpdateDto } from './models/birdhouse.update.dto';

export class AppRepository {
  private readonly birdhouses: Birdhouse[] = [];
  create(body): Promise<Birdhouse> {
    return new Promise((resolve) => {
      const birdhouse = new Birdhouse();
      birdhouse.name = body.name;
      birdhouse.longitude = body.longitude;
      birdhouse.latitude = body.latitude;
      this.birdhouses.push(birdhouse);
      return resolve(birdhouse);
    });
  }

  update(id: string, body: BirdhouseUpdateDto): Promise<Birdhouse> {
    return new Promise((resolve) => {
      const birdhouse = this.birdhouses.find(
        (birdhouse) => birdhouse.id === id,
      );
      birdhouse.name = body.name;
      birdhouse.longitude = body.longitude;
      birdhouse.latitude = body.latitude;
      return resolve(birdhouse);
    });
  }
}
