import { Module } from '@nestjs/common';
import { EstadoOrdenCompraService } from './estado-orden-compra.service';
import { EstadoOrdenCompraController } from './estado-orden-compra.controller';

@Module({
  providers: [EstadoOrdenCompraService],
  controllers: [EstadoOrdenCompraController]
})
export class EstadoOrdenCompraModule {}
