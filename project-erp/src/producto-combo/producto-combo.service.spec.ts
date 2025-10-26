import { Test, TestingModule } from '@nestjs/testing';
import { ProductoComboService } from './producto-combo.service';

describe('ProductoComboService', () => {
  let service: ProductoComboService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductoComboService],
    }).compile();

    service = module.get<ProductoComboService>(ProductoComboService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
