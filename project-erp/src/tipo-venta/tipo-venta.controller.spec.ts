import { Test, TestingModule } from '@nestjs/testing';
import { TipoVentaController } from './tipo-venta.controller';

describe('TipoVentaController', () => {
  let controller: TipoVentaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoVentaController],
    }).compile();

    controller = module.get<TipoVentaController>(TipoVentaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
