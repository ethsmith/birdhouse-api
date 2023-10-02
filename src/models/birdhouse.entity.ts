import { AfterInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('birdhouses')
export class Birdhouse {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  ubid: string;

  @Column('int', { default: 0 })
  birds: number;

  @Column('int', { default: 0 })
  eggs: number;

  @Column()
  longitude: number;

  @Column()
  latitude: number;

  @Column()
  name: string;

  @AfterInsert()
  updateUbid() {
    // set the ubid to the id in the database
    this.ubid = this.id;
  }
}
