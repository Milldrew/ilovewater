import { Controller, Get, Param } from '@nestjs/common';

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
}
