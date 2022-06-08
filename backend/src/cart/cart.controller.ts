import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Put,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { buildMapper } from 'dto-mapper';
import { CartDto } from './dto/Cart.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserService } from '../user/user.service';
import { ProductDto } from '../product/dto/Product.dto';
import { ProductService } from '../product/product.service';
import { OrderDto } from '../order/dto/Order.dto';

@Controller('cart')
@UseGuards(JwtAuthGuard)
export class CartController {
  constructor(
    private readonly cartService: CartService,
    private readonly userService: UserService,
    private readonly productService: ProductService,
  ) {}

  private readonly mapper = buildMapper(CartDto);
  private readonly productMapper = buildMapper(ProductDto);
  private readonly orderMapper = buildMapper(OrderDto);

  @Get()
  async getCart(@Request() req): Promise<CartDto> {
    const user = await this.userService.get(req.user.username);
    const cart = await this.cartService.getByUser(user);
    return this.mapper.serialize(cart);
  }

  @Get('products')
  async getProducts(@Request() req): Promise<ProductDto[]> {
    const user = await this.userService.get(req.user.username);
    const cart = await this.cartService.getByUser(user);
    const products = [];
    for (const product of cart.products) {
      products.push(this.productMapper.serialize(product));
    }
    return products;
  }

  @Put('products')
  async addProduct(@Request() req, @Body() products: number[]) {
    if (products?.length >= 1) {
      const user = await this.userService.get(req.user.username);
      const cart = await this.cartService.getByUser(user);
      const productList = [];
      for (const productId of products) {
        const product = await this.productService.get(productId);
        productList.push(product);
      }
      const updatedCart = await this.cartService.addToCart(cart, productList);
      return this.mapper.serialize(updatedCart);
    } else {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: 'No Products selected!',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @UsePipes(ValidationPipe)
  @Post('checkout')
  async checkout(@Request() request) {
    const user = await this.userService.get(request.user.username);
    const cart = await this.cartService.getByUser(user);
    if (cart?.products?.length !== 0) {
      if (cart?.user.id === user.id) {
        const order = await this.cartService.checkout(cart);
        return this.orderMapper.serialize(order);
      } else {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            message: 'You are not allowed to checkout this cart!',
          },
          HttpStatus.FORBIDDEN,
        );
      }
    } else {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: 'No Products in Cart!',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
