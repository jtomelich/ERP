import { Module } from '@nestjs/common';
import { CodigobarraController } from './codigobarra.controller';
import { CodigobarraService } from './codigobarra.service';

@Module({
  controllers: [CodigobarraController],
  providers: [CodigobarraService]
})
export class CodigobarraModule {}
