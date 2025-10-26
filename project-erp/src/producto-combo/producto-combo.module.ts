import { Module } from '@nestjs/common';
import { ProductoComboService } from './producto-combo.service';
import { ProductoComboController } from './producto-combo.controller';

@Module({
  providers: [ProductoComboService],
  controllers: [ProductoComboController]
})
export class ProductoComboModule {}
