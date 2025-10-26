import { Module } from '@nestjs/common';
import { OrdenCompraCompraService } from './orden-compra-compra.service';
import { OrdenCompraCompraController } from './orden-compra-compra.controller';

@Module({
  providers: [OrdenCompraCompraService],
  controllers: [OrdenCompraCompraController]
})
export class OrdenCompraCompraModule {}
