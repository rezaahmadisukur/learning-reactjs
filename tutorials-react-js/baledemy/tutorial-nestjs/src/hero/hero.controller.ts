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
  Put,
  Redirect,
  Res,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
  constructor(private heroService: HeroService) {}

  @Get('index') // hero/index
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  index(@Res() response: Response) {
    return response.json(this.heroService.findAll());
  }

  @Get('detail/:id')
  @Bind(Param('id'))
  show(id: string, @Res() response: Response) {
    const hero = this.heroService.findOne(id);
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
    // @Req() request: Request,
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

      this.heroService.create(createHeroDto);

      return response.status(201).json({
        message: 'Create successfully',
        data: this.heroService.findAll(),
      });
    } catch (error) {
      response.status(500).json({
        message: error as Error,
      });
    }
  }

  @Put('update/:id')
  @Bind(Param('id'))
  update(
    id: string,
    @Body() updateHeroDto: UpdateHeroDto,
    @Res() response: Response,
  ) {
    const find = this.heroService.findOne(id);

    if (!find) {
      return response.status(404).json({
        message: `Not found ${find}`,
      });
    }

    find.id = updateHeroDto.id as unknown as number;
    find.nama = updateHeroDto.nama as unknown as string;
    find.type = updateHeroDto.type as unknown as string;
    find.gambar = updateHeroDto.gambar as unknown as string;

    return response.status(200).json({
      message: 'Updated Successfully',
      data: this.heroService.findAll(),
    });
  }

  @Delete('destroy/:id')
  @Bind(Param('id'))
  destroy(id: string, @Res({ passthrough: true }) response: Response) {
    // const { id } = request.body as {
    //   id: number;
    // };

    const deleted = this.heroService.deleteOne(id);

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
