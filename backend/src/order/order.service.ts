import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order, Product, User } from '../typeorm';
import { Repository } from 'typeorm';
import { OrderNotFoundException } from '../exception/order-not-found.exception';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async getList(): Promise<Order[]> {
    return this.orderRepository.find({
      relations: { products: true, user: true },
    });
  }
  async get(id: number): Promise<Order | OrderNotFoundException> {
    const order = await this.orderRepository.findOne({
      where: { id },
      relations: { products: true, user: true },
    });
    if (order && order.id) {
      return order;
    } else {
      throw new OrderNotFoundException();
    }
  }

  create(products: Product[], user: User) {
    const order = this.orderRepository.create({
      products,
      user,
      createdAt: new Date(),
    });
    return this.orderRepository.save(order);
  }
}
