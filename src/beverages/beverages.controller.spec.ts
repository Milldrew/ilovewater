import { Test, TestingModule } from '@nestjs/testing';
import { BeveragesController } from './beverages.controller';

describe('BeveragesController', () => {
  let controller: BeveragesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeveragesController],
    }).compile();

    controller = module.get<BeveragesController>(BeveragesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
