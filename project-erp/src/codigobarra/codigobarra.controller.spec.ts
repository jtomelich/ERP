import { Test, TestingModule } from '@nestjs/testing';
import { CodigobarraController } from './codigobarra.controller';

describe('CodigobarraController', () => {
  let controller: CodigobarraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CodigobarraController],
    }).compile();

    controller = module.get<CodigobarraController>(CodigobarraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
