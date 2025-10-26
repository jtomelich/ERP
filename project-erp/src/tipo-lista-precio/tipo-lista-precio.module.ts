import { Module } from '@nestjs/common';
import { TipoListaPrecioService } from './tipo-lista-precio.service';
import { TipoListaPrecioController } from './tipo-lista-precio.controller';

@Module({
  providers: [TipoListaPrecioService],
  controllers: [TipoListaPrecioController]
})
export class TipoListaPrecioModule {}
