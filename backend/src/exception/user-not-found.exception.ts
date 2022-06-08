import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor() {
    super(
      {
        status: HttpStatus.NOT_FOUND,
        message: 'User not found!',
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
