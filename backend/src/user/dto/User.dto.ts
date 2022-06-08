import { dto, include } from 'dto-mapper';

@dto()
export class UserDto {
  @include()
  id: number;

  @include()
  username: string;

  @include()
  email?: string;
}
