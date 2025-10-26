import { Module } from '@nestjs/common';
import { OrdenCompraService } from './orden-compra.service';
import { OrdenCompraController } from './orden-compra.controller';

@Module({
  providers: [OrdenCompraService],
  controllers: [OrdenCompraController]
})
export class OrdenCompraModule {}
