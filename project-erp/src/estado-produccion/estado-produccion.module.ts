import { Module } from '@nestjs/common';
import { EstadoProduccionService } from './estado-produccion.service';
import { EstadoProduccionController } from './estado-produccion.controller';

@Module({
  providers: [EstadoProduccionService],
  controllers: [EstadoProduccionController]
})
export class EstadoProduccionModule {}
