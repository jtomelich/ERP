import { Test, TestingModule } from '@nestjs/testing';
import { TipoVentaService } from './tipo-venta.service';

describe('TipoVentaService', () => {
  let service: TipoVentaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoVentaService],
    }).compile();

    service = module.get<TipoVentaService>(TipoVentaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
