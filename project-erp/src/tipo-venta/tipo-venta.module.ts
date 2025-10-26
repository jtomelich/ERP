import { Module } from '@nestjs/common';
import { TipoVentaService } from './tipo-venta.service';
import { TipoVentaController } from './tipo-venta.controller';

@Module({
  providers: [TipoVentaService],
  controllers: [TipoVentaController]
})
export class TipoVentaModule {}
