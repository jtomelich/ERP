import { Module } from '@nestjs/common';
import { EstadoVentaService } from './estado-venta.service';
import { EstadoVentaController } from './estado-venta.controller';

@Module({
  providers: [EstadoVentaService],
  controllers: [EstadoVentaController]
})
export class EstadoVentaModule {}
