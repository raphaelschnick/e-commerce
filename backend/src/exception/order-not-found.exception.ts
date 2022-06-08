import { HttpException, HttpStatus } from '@nestjs/common';

export class OrderNotFoundException extends HttpException {
  constructor() {
    super(
      {
        status: HttpStatus.NOT_FOUND,
        message: 'Order not found!',
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
