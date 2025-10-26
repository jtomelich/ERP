import { Module } from '@nestjs/common';
import { TipoCuentaService } from './tipo-cuenta.service';
import { TipoCuentaController } from './tipo-cuenta.controller';

@Module({
  providers: [TipoCuentaService],
  controllers: [TipoCuentaController]
})
export class TipoCuentaModule {}
