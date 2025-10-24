import { Module } from '@nestjs/common';
import { DetalleOrdenCompraService } from './detalle-orden-compra.service';
import { DetalleOrdenCompraController } from './detalle-orden-compra.controller';

@Module({
  providers: [DetalleOrdenCompraService],
  controllers: [DetalleOrdenCompraController]
})
export class DetalleOrdenCompraModule {}
