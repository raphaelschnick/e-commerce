import {
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';
import { Product } from './Product';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @ManyToOne(() => User)
  user: User;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];
}
