import { Beverage } from './entities/beverage.entity';
import { HttpCode, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBeverageDto } from './dto/create-beverage.dto';
import { UpdateBeverageDto } from './dto/update-beverage.dto';

@Injectable()
export class BeveragesService {
  private beverages: Beverage[] = [
    {
      id: 1,
      name: 'Fiji Water',
      brand: 'Fiji',
      flavors: ['Volcano', 'Serene'],
    },
  ];

  findAll() {
    return this.beverages;
  }
  delete(id: number) {
    const beverageIndex = this.beverages.findIndex(
      (beverage) => beverage.id === id,
    );
    if (beverageIndex < 1) {
      HttpCode(HttpStatus.NOT_FOUND);
    }
    const deletedBeverage = this.beverages.splice(beverageIndex, 1);
    return `${deletedBeverage} has been deleted`;
  }
  findBeverage(id: number) {
    const beverage = this.beverages.find((beverage) => beverage.id === id);
    if (beverage) {
      HttpCode(HttpStatus.NOT_FOUND);
    }
    return beverage;
  }
  create(createBeverageDto: CreateBeverageDto) {
    const id = Math.floor(Math.random() * 10000);
    this.beverages.push({ id, ...createBeverageDto });
  }
  update(id: number, updateBeverageDto: UpdateBeverageDto) {
    console.log('hello from update service');
    const beverage = this.beverages.find((beverage) => beverage.id === id);
    console.log({ beverage });
    Object.assign(beverage, updateBeverageDto);
  }
}
