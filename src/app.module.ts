import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeveragesController } from './beverages/beverages.controller';

@Module({
  imports: [],
  controllers: [AppController, BeveragesController],
  providers: [AppService],
})
export class AppModule {}
