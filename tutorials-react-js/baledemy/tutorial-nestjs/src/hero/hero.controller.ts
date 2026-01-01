import { Controller, Get, HttpCode, Res } from '@nestjs/common';
import type { Response } from 'express';

@Controller('hero')
export class HeroController {
  @Get('index') // hero/index
  @HttpCode(200)
  index(@Res() response: Response) {
    return response.json({
      title: 'hero world',
    });
  }

  @Get('create') // hero/create
  create(): string {
    return 'hero create';
  }
}
