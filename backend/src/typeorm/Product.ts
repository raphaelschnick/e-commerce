import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Product {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @Column()
  description: string;

  @Column({
    nullable: false,
    default: 0,
  })
  price: number;

  @ManyToOne(() => User, (user) => user.products)
  owner: User;
}
