import { Module } from '@nestjs/common';
import { TipoTransaccionService } from './tipo-transaccion.service';
import { TipoTransaccionController } from './tipo-transaccion.controller';

@Module({
  providers: [TipoTransaccionService],
  controllers: [TipoTransaccionController]
})
export class TipoTransaccionModule {}
