import { Test, TestingModule } from '@nestjs/testing';
import { ProductoTerminadoService } from './producto-terminado.service';

describe('ProductoTerminadoService', () => {
  let service: ProductoTerminadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductoTerminadoService],
    }).compile();

    service = module.get<ProductoTerminadoService>(ProductoTerminadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
