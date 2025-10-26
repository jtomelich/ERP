import { Module } from '@nestjs/common';
import { ProductoTerminadoService } from './producto-terminado.service';
import { ProductoTerminadoController } from './producto-terminado.controller';

@Module({
  providers: [ProductoTerminadoService],
  controllers: [ProductoTerminadoController]
})
export class ProductoTerminadoModule {}
