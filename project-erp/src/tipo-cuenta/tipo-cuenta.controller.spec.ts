import { Test, TestingModule } from '@nestjs/testing';
import { TipoCuentaController } from './tipo-cuenta.controller';

describe('TipoCuentaController', () => {
  let controller: TipoCuentaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoCuentaController],
    }).compile();

    controller = module.get<TipoCuentaController>(TipoCuentaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
