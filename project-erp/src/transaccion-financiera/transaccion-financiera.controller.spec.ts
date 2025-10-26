import { Test, TestingModule } from '@nestjs/testing';
import { TransaccionFinancieraController } from './transaccion-financiera.controller';

describe('TransaccionFinancieraController', () => {
  let controller: TransaccionFinancieraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransaccionFinancieraController],
    }).compile();

    controller = module.get<TransaccionFinancieraController>(TransaccionFinancieraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
