import { Test, TestingModule } from '@nestjs/testing';
import { EstadoOrdenCompraService } from './estado-orden-compra.service';

describe('EstadoOrdenCompraService', () => {
  let service: EstadoOrdenCompraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadoOrdenCompraService],
    }).compile();

    service = module.get<EstadoOrdenCompraService>(EstadoOrdenCompraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
