import { Test, TestingModule } from '@nestjs/testing';
import { ProductoTerminadoController } from './producto-terminado.controller';

describe('ProductoTerminadoController', () => {
  let controller: ProductoTerminadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductoTerminadoController],
    }).compile();

    controller = module.get<ProductoTerminadoController>(ProductoTerminadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
