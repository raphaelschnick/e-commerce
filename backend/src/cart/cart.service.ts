import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart, Product, User } from '../typeorm';
import { CartNotFoundException } from '../exception/cart-not-found.exception';
import { OrderService } from '../order/order.service';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
    private readonly orderService: OrderService,
  ) {}

  async getByUser(user: User): Promise<Cart> {
    const cart = await this.cartRepository.findOne({
      where: { user },
      relations: { products: true, user: true },
    });
    if (cart && cart.id) {
      return cart;
    } else {
      return this.create(user);
    }
  }
  async get(id: number): Promise<Cart | undefined> {
    const cart = await this.cartRepository.findOne({
      where: { id },
      relations: { products: true, user: true },
    });
    if (cart && cart.id) {
      return cart;
    } else {
      throw new CartNotFoundException();
    }
  }

  async addToCart(cart: Cart, products: Product[]) {
    for (const product of products) {
      await this.cartRepository
        .createQueryBuilder()
        .relation(Cart, 'products')
        .of(cart)
        .add(product);
    }
    return this.get(cart.id);
  }

  removeFromCart(cart: Cart, product: Product) {
    const products = cart.products;
    console.log(products.indexOf(product));
    // TODO: remove object
    return this.cartRepository.update(cart.id, { products: products });
  }

  async checkout(cart: Cart) {
    const user = cart.user;
    const products = cart.products;
    await this.create(user);
    await this.delete(cart);
    return this.orderService.create(products, user);
  }

  create(user: User) {
    const newCart = this.cartRepository.create({ user, products: [] });
    return this.cartRepository.save(newCart);
  }

  async delete(cart: Cart) {
    return this.cartRepository.delete(cart.id);
  }
}
