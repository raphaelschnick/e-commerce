import { HttpException, HttpStatus } from '@nestjs/common';

export class ProductNotFoundException extends HttpException {
  constructor() {
    super(
      {
        status: HttpStatus.NOT_FOUND,
        message: 'Product not found!',
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
