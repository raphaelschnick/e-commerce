import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';
import { Product } from './Product';

@Entity()
export class Order {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column()
  createdAt: Date;

  @Column()
  shippedAt: Date;

  @Column()
  shippingDate: Date;

  @ManyToOne(() => User)
  user: User;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];
}
