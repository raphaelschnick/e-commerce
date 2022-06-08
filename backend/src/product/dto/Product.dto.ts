import { UserDto } from '../../user/dto/User.dto';
import { dto, include, nested } from 'dto-mapper';

@dto()
export class ProductDto {
  @include()
  id: number;

  @include()
  name: string;

  @include()
  description?: string;

  @include()
  @nested(() => UserDto, false)
  owner: UserDto;
}
