import { Test, TestingModule } from '@nestjs/testing';
import { ListaPrecioController } from './lista-precio.controller';

describe('ListaPrecioController', () => {
  let controller: ListaPrecioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListaPrecioController],
    }).compile();

    controller = module.get<ListaPrecioController>(ListaPrecioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
