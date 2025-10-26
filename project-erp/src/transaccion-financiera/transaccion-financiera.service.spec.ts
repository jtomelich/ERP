import { Test, TestingModule } from '@nestjs/testing';
import { TransaccionFinancieraService } from './transaccion-financiera.service';

describe('TransaccionFinancieraService', () => {
  let service: TransaccionFinancieraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransaccionFinancieraService],
    }).compile();

    service = module.get<TransaccionFinancieraService>(TransaccionFinancieraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
