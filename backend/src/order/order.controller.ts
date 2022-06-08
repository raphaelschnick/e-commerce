import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { OrderService } from './order.service';
import { buildMapper } from 'dto-mapper';
import { OrderDto } from './dto/Order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  private readonly mapper = buildMapper(OrderDto);

  @Get()
  async getList(): Promise<OrderDto[]> {
    const orders = [];
    const list = await this.orderService.getList();
    list.forEach((order) => {
      orders.push(this.mapper.serialize(order));
    });
    return orders;
  }

  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number) {
    const order = await this.orderService.get(id);
    return this.mapper.serialize(order);
  }
}
