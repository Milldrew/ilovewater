import { Beverage } from './entities/beverage.entity';
import { HttpCode, HttpStatus, Injectable } from '@nestjs/common';

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
  findBeverage(id: number) {
    const beverage = this.beverages.find((beverage) => beverage.id === id);
    if (beverage) {
      HttpCode(HttpStatus.NOT_FOUND);
    }
    return beverage;
  }
}
