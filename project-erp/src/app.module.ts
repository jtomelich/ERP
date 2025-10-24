import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CodigobarraModule } from './codigobarra/codigobarra.module';
import { ProductoModule } from './producto/producto.module';
import { CompraModule } from './compra/compra.module';
import { CuentaFinancieraModule } from './cuenta-financiera/cuenta-financiera.module';
import { DetalleCompraModule } from './detalle-compra/detalle-compra.module';
import { DetalleOrdenCompraModule } from './detalle-orden-compra/detalle-orden-compra.module';
import { DetalleVentaModule } from './detalle-venta/detalle-venta.module';

@Module({
  imports: [CodigobarraModule, ProductoModule, CompraModule, CuentaFinancieraModule, DetalleCompraModule, DetalleOrdenCompraModule, DetalleVentaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
