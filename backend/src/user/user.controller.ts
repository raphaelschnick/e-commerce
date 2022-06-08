import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { buildMapper } from 'dto-mapper';
import { UserDto } from './dto/User.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  private readonly mapper = buildMapper(UserDto);

  @Get()
  async getList() {
    return this.mapper.serialize(await this.userService.getList());
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return this.mapper.serialize(await this.userService.getById(id));
  }
}
