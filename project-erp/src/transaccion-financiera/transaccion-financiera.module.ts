import { Module } from '@nestjs/common';
import { TransaccionFinancieraService } from './transaccion-financiera.service';
import { TransaccionFinancieraController } from './transaccion-financiera.controller';

@Module({
  providers: [TransaccionFinancieraService],
  controllers: [TransaccionFinancieraController]
})
export class TransaccionFinancieraModule {}
