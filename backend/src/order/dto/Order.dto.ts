import { UserDto } from '../../user/dto/User.dto';
import { dto, include, nested } from 'dto-mapper';
import { ProductDto } from '../../product/dto/Product.dto';

@dto()
export class OrderDto {
  @include()
  id: number;

  @include()
  createdAt: Date;

  @include()
  shippedAt: Date;

  @include()
  shippingDate: Date;

  @include()
  description?: string;

  @include()
  @nested(() => UserDto, false)
  user: UserDto;

  @include()
  @nested(() => ProductDto, true)
  products: ProductDto[];
}
