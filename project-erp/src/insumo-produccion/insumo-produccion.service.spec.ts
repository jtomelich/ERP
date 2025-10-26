import { Test, TestingModule } from '@nestjs/testing';
import { InsumoProduccionService } from './insumo-produccion.service';

describe('InsumoProduccionService', () => {
  let service: InsumoProduccionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsumoProduccionService],
    }).compile();

    service = module.get<InsumoProduccionService>(InsumoProduccionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
