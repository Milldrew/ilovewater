import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { BeveragesService } from './beverages.service';
import { CreateBeverageDto } from './dto/create-beverage.dto';

@Controller('beverages')
export class BeveragesController {
  constructor(private readonly beveragesService: BeveragesService) {}
  @Get()
  paginationQuery(@Query() queryRequest) {
    const { limit, offset } = queryRequest;
    return `limit : ${limit}, offset ${offset}`;
  }
  @Get()
  allBeverages() {
    return 'this action gets all the beverages';
  }
  @Get(':id')
  getBeverageById(@Param('id') id: string) {
    return this.beveragesService.findBeverage(Number(id));
  }
  @Post()
  createBeverage(@Body() createBeverageDto: CreateBeverageDto) {
    return createBeverageDto.name;
  }
  @Patch(':id')
  update(@Param('id') id: string) {
    return `This updates the beverage with id : ${id}`;
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return `This deletes the beverage with the id: ${id}`;
  }
}
