import { Module } from '@nestjs/common';
import { OrdenProduccionService } from './orden-produccion.service';
import { OrdenProduccionController } from './orden-produccion.controller';

@Module({
  providers: [OrdenProduccionService],
  controllers: [OrdenProduccionController]
})
export class OrdenProduccionModule {}
