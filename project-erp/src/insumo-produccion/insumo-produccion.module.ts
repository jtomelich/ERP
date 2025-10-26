import { Module } from '@nestjs/common';
import { InsumoProduccionService } from './insumo-produccion.service';
import { InsumoProduccionController } from './insumo-produccion.controller';

@Module({
  providers: [InsumoProduccionService],
  controllers: [InsumoProduccionController]
})
export class InsumoProduccionModule {}
