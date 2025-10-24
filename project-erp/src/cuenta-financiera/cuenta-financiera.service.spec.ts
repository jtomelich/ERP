import { Test, TestingModule } from '@nestjs/testing';
import { CuentaFinancieraService } from './cuenta-financiera.service';

describe('CuentaFinancieraService', () => {
  let service: CuentaFinancieraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuentaFinancieraService],
    }).compile();

    service = module.get<CuentaFinancieraService>(CuentaFinancieraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
