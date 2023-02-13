import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Supplement {
  // @PrimaryGeneratedColumn()
  // id: number;

  @PrimaryGeneratedColumn()
  supplement: string;

  @Column()
  imgUrl: string;

  @Column()
  type: string;

  @Column()
  count: number;

  @Column()
  weight: string;

  @Column()
  rating: number;

  @Column()
  price: string;
}
