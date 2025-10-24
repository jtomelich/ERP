import { Module } from '@nestjs/common';
import { DetalleCompraService } from './detalle-compra.service';
import { DetalleCompraController } from './detalle-compra.controller';

@Module({
  providers: [DetalleCompraService],
  controllers: [DetalleCompraController]
})
export class DetalleCompraModule {}
