import { Test, TestingModule } from '@nestjs/testing';
import { EstadoVentaController } from './estado-venta.controller';

describe('EstadoVentaController', () => {
  let controller: EstadoVentaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadoVentaController],
    }).compile();

    controller = module.get<EstadoVentaController>(EstadoVentaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
