import {
  Bind,
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { CreateHeroDto } from './dto/create-hero.dto';

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
  @Header('Content-Type', 'application/json')
  index(@Res() response: Response) {
    return response.json(heroes);
  }

  @Get('detail/:id')
  @Bind(Param('id'))
  show(id: string, @Res() response: Response) {
    const hero = heroes.find((hero) => hero.id.toString() === id);
    return response.json({
      message: 'Detail Successfully',
      data: hero,
    });
  }

  @Get('create') // hero/create
  create(@Res({ passthrough: true }) response: Response): string {
    response.cookie('name', 'baledemia');
    return 'hero create';
  }

  @Post('store')
  store(
    @Req() request: Request,
    @Body() createHeroDto: CreateHeroDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    try {
      // const { id, nama, type, gambar } = request.body as {
      //   id: number;
      //   nama: string;
      //   type: string;
      //   gambar: string;
      // };

      // heroes.push(createHeroDto);

      // return response.status(201).json({
      //   message: 'Create successfully',
      //   data: heroes,
      // });
      return createHeroDto;
    } catch (error) {
      response.status(500).json({
        message: error as Error,
      });
    }
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

  @Get('welcome')
  @Redirect('https://docs.nestjs.com/')
  hello() {
    return 'welcome';
  }
}
