import { Test, TestingModule } from '@nestjs/testing';
import { ProductoComboController } from './producto-combo.controller';

describe('ProductoComboController', () => {
  let controller: ProductoComboController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductoComboController],
    }).compile();

    controller = module.get<ProductoComboController>(ProductoComboController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
