import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeveragesController } from './beverages/beverages.controller';
import { BeveragesService } from './beverages/beverages.service';

@Module({
  imports: [],
  controllers: [AppController, BeveragesController],
  providers: [AppService, BeveragesService],
})
export class AppModule {}
