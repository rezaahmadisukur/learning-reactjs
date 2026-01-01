import { Controller, Get } from '@nestjs/common';

@Controller('hero')
export class HeroController {
  @Get('index') // hero/index
  index(): string {
    return 'hero index';
  }

  @Get('create') // hero/create
  create(): string {
    return 'hero create';
  }
}
