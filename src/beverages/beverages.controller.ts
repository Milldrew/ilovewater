import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('beverages')
export class BeveragesController {
  @Get()
  allBeverages() {
    return 'this action gets all the beverages';
  }
  @Get(':id')
  getBeverageById(@Param('id') id: string) {
    return `This action will get the beverage with the id ${id}.`;
  }
  @Post()
  createPost(@Body('name') name: string) {
    return name;
  }
}
