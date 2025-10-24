import { Test, TestingModule } from '@nestjs/testing';
import { CuentaFinancieraController } from './cuenta-financiera.controller';

describe('CuentaFinancieraController', () => {
  let controller: CuentaFinancieraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuentaFinancieraController],
    }).compile();

    controller = module.get<CuentaFinancieraController>(CuentaFinancieraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
