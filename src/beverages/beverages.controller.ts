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
import { UpdateBeverageDto } from './dto/update-beverage.dto';

@Controller('beverages')
export class BeveragesController {
  constructor(private readonly beveragesService: BeveragesService) {}
  @Get()
  findAll(@Query() queryRequest: any) {
    //const { limit, offset } = queryRequest;
    return this.beveragesService.findAll();
  }
  @Get(':id')
  getBeverageById(@Param('id') id: string) {
    return this.beveragesService.findBeverage(Number(id));
  }
  @Post()
  createBeverage(@Body() createBeverageDto: CreateBeverageDto) {
    return this.beveragesService.create(createBeverageDto);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBeverageDto: UpdateBeverageDto,
  ) {
    console.log(updateBeverageDto);
    console.log('hello from patch');
    this.beveragesService.update(Number(id), updateBeverageDto);
    return `This updates the beverage with id : ${id}`;
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    console.log('delete here');
    return this.beveragesService.delete(Number(id));
  }
}
