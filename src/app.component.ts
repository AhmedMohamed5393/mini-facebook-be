import { Controller, Get } from '@nestjs/common';
@Controller()
export class AppController {
  @Get("")
  gettingStarted(): string { return "Mini Facebook application is running on the server"; }
}