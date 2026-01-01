import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import type { Request, Response } from 'express';

const heroes = [
  {
    id: 1,
    nama: 'Aurora',
    type: 'Mage',
    gambar: 'aurora.jpg',
  },
  {
    id: 2,
    nama: 'Zilong',
    type: 'Fighter',
    gambar: 'zilong.jpg',
  },
  {
    id: 3,
    nama: 'Akai',
    type: 'Tank',
    gambar: 'akai.jpg',
  },
];

@Controller('hero')
export class HeroController {
  @Get('index') // hero/index
  @HttpCode(200)
  index(@Res() response: Response) {
    return response.json(heroes);
  }

  @Get('create') // hero/create
  create(@Res({ passthrough: true }) response: Response): string {
    response.cookie('name', 'baledemia');
    return 'hero create';
  }

  @Post('store')
  store(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { id, nama, type, gambar } = request.body as {
      id: number;
      nama: string;
      type: string;
      gambar: string;
    };

    heroes.push({
      id,
      nama,
      type,
      gambar,
    });

    return response.status(201).json({
      message: 'Create successfully',
      data: heroes,
    });
  }

  @Delete('destroy')
  destroy(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { id } = request.body as {
      id: number;
    };

    const deleted = heroes.filter((hero) => hero.id !== id);

    return response.status(200).json({
      message: 'Delete Successfully',
      data: deleted,
    });
  }
}
