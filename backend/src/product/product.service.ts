import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product, User } from '../typeorm';
import { Repository } from 'typeorm';
import { ProductNotFoundException } from '../exception/product-not-found.exception';
import { CreateProductDto } from './dto/CreateProduct.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async getList(): Promise<Product[]> {
    return this.productRepository.find({ relations: { owner: true } });
  }

  async get(id: number): Promise<Product | undefined> {
    const user = await this.productRepository.findOne({
      where: { id },
      relations: { owner: true },
    });
    if (user && user.id) {
      return user;
    } else {
      throw new ProductNotFoundException();
    }
  }

  async create(product: CreateProductDto, owner: User) {
    const newProduct = this.productRepository.create(product);
    newProduct.owner = owner;
    return this.productRepository.save(newProduct);
  }
}
