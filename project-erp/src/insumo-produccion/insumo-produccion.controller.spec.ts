import { Test, TestingModule } from '@nestjs/testing';
import { InsumoProduccionController } from './insumo-produccion.controller';

describe('InsumoProduccionController', () => {
  let controller: InsumoProduccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsumoProduccionController],
    }).compile();

    controller = module.get<InsumoProduccionController>(InsumoProduccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
