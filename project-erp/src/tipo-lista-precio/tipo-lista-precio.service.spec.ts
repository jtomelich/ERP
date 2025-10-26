import { Test, TestingModule } from '@nestjs/testing';
import { TipoListaPrecioService } from './tipo-lista-precio.service';

describe('TipoListaPrecioService', () => {
  let service: TipoListaPrecioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoListaPrecioService],
    }).compile();

    service = module.get<TipoListaPrecioService>(TipoListaPrecioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
