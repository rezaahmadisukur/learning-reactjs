import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroController } from './hero/hero.controller';
import { UserModule } from './user/user.module';
import { RoleController } from './role/role.controller';
import { HeroService } from './hero/hero.service';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [UserModule, HeroModule],
  controllers: [AppController, HeroController, RoleController],
  providers: [AppService, HeroService],
})
export class AppModule {}
