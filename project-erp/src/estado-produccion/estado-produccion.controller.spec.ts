import { Test, TestingModule } from '@nestjs/testing';
import { EstadoProduccionController } from './estado-produccion.controller';

describe('EstadoProduccionController', () => {
  let controller: EstadoProduccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadoProduccionController],
    }).compile();

    controller = module.get<EstadoProduccionController>(EstadoProduccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
