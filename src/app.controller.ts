import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  health(): string {
    return 'OK';
  }

  @Post()
  new(): string {
    return this.appService.new();
  }
}
