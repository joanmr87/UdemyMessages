import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessagesDto } from './dtos/create-messages.dto';
import { MessagesService } from './messages.service';
/*
Controller: The controller decorator is used to define a class as a controller.
Get: The get decorator is used to define a get method.
Post: The post decorator is used to define a post method.
Body: The body decorator is used to define a body parameter.
Param: The param decorator is used to define a path parameter.
*/

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessagesDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param() id: string) {
    const message = await this.messagesService.findOne(id);
    console.log(id);

    if (!message) {
      throw new NotFoundException(`Message not found`);
    }

    return message;
  }
}
