import { Test, TestingModule } from '@nestjs/testing';
import { EstadoOrdenCompraController } from './estado-orden-compra.controller';

describe('EstadoOrdenCompraController', () => {
  let controller: EstadoOrdenCompraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadoOrdenCompraController],
    }).compile();

    controller = module.get<EstadoOrdenCompraController>(EstadoOrdenCompraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
