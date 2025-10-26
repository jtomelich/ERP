import { Test, TestingModule } from '@nestjs/testing';
import { OrdenCompraCompraController } from './orden-compra-compra.controller';

describe('OrdenCompraCompraController', () => {
  let controller: OrdenCompraCompraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdenCompraCompraController],
    }).compile();

    controller = module.get<OrdenCompraCompraController>(OrdenCompraCompraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
