import { Test, TestingModule } from '@nestjs/testing';
import { OrdenCompraCompraService } from './orden-compra-compra.service';

describe('OrdenCompraCompraService', () => {
  let service: OrdenCompraCompraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdenCompraCompraService],
    }).compile();

    service = module.get<OrdenCompraCompraService>(OrdenCompraCompraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
