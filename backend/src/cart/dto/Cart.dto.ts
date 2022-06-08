import { dto, include, nested } from 'dto-mapper';
import { UserDto } from '../../user/dto/User.dto';
import { ProductDto } from '../../product/dto/Product.dto';

@dto()
export class CartDto {
  @include()
  id: number;

  @include()
  @nested(() => UserDto, false)
  user: UserDto;

  @include()
  @nested(() => ProductDto, true)
  products: ProductDto[];
}
