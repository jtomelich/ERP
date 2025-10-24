import { Module } from '@nestjs/common';
import { CuentaFinancieraService } from './cuenta-financiera.service';
import { CuentaFinancieraController } from './cuenta-financiera.controller';

@Module({
  providers: [CuentaFinancieraService],
  controllers: [CuentaFinancieraController]
})
export class CuentaFinancieraModule {}
