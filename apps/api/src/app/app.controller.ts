import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { ContextItem } from './models/context-item.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get('context')
  getData(): Array<ContextItem> {
    return this.appService.getData();
  }

  @Post('context')
  postData(@Body() contextItem: ContextItem): ContextItem {
    return this.appService.postData(contextItem);
  }
}
