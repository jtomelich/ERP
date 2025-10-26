import { Test, TestingModule } from '@nestjs/testing';
import { EstadoProduccionService } from './estado-produccion.service';

describe('EstadoProduccionService', () => {
  let service: EstadoProduccionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadoProduccionService],
    }).compile();

    service = module.get<EstadoProduccionService>(EstadoProduccionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
