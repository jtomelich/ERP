import { Module } from '@nestjs/common';
import { ListaPrecioService } from './lista-precio.service';
import { ListaPrecioController } from './lista-precio.controller';

@Module({
  providers: [ListaPrecioService],
  controllers: [ListaPrecioController]
})
export class ListaPrecioModule {}
