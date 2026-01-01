import { Controller, Get } from '@nestjs/common';

@Controller()
export class HeroController {
  @Get('hero/index')
  index(): string {
    return 'hero index';
  }

  @Get('hero/create')
  create(): string {
    return 'hero create';
  }
}
