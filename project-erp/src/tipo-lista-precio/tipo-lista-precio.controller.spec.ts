import { Test, TestingModule } from '@nestjs/testing';
import { TipoListaPrecioController } from './tipo-lista-precio.controller';

describe('TipoListaPrecioController', () => {
  let controller: TipoListaPrecioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoListaPrecioController],
    }).compile();

    controller = module.get<TipoListaPrecioController>(TipoListaPrecioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
