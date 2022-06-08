import { HttpException, HttpStatus } from '@nestjs/common';

export class CartNotFoundException extends HttpException {
  constructor() {
    super(
      {
        status: HttpStatus.NOT_FOUND,
        message: 'Cart not found!',
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
