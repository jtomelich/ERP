import { Test, TestingModule } from '@nestjs/testing';
import { CodigobarraService } from './codigobarra.service';

describe('CodigobarraService', () => {
  let service: CodigobarraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodigobarraService],
    }).compile();

    service = module.get<CodigobarraService>(CodigobarraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
