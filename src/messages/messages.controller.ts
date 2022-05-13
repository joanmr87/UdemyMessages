import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessagesDto } from './dtos/create-messages.dto';

/*
Controller: The controller decorator is used to define a class as a controller.
Get: The get decorator is used to define a get method.
Post: The post decorator is used to define a post method.
Body: The body decorator is used to define a body parameter.
Param: The param decorator is used to define a path parameter.
*/

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    console.log('listing messages');
  }

  @Post()
  createMessage(@Body() body: CreateMessagesDto) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param() id: string) {
    console.log(id);
  }
}
