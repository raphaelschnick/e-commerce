import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateProductDto } from './dto/CreateProduct.dto';
import { UserService } from '../user/user.service';
import { buildMapper } from 'dto-mapper';
import { ProductDto } from './dto/Product.dto';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly userService: UserService,
  ) {}

  private readonly mapper = buildMapper(ProductDto);

  @Get()
  async getList(): Promise<ProductDto[]> {
    const products = [];
    const list = await this.productService.getList();
    list.forEach((product) => {
      products.push(this.mapper.serialize(product));
    });
    return products;
  }

  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number) {
    const product = await this.productService.get(id);
    return this.mapper.serialize(product);
  }

  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @Post()
  async create(@Request() request, @Body() product: CreateProductDto) {
    const user = await this.userService.get(request.user.username);
    const response = await this.productService.create(product, user);
    return this.mapper.serialize(response);
  }
}
