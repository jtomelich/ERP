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
import { EstadoOrdenCompraModule } from './estado-orden-compra/estado-orden-compra.module';
import { EstadoProduccionModule } from './estado-produccion/estado-produccion.module';
import { EstadoVentaModule } from './estado-venta/estado-venta.module';
import { InsumoProduccionModule } from './insumo-produccion/insumo-produccion.module';
import { ListaPrecioModule } from './lista-precio/lista-precio.module';
import { LoteModule } from './lote/lote.module';
import { OrdenCompraModule } from './orden-compra/orden-compra.module';
import { OrdenCompraCompraModule } from './orden-compra-compra/orden-compra-compra.module';
import { OrdenProduccionModule } from './orden-produccion/orden-produccion.module';
import { PermisoModule } from './permiso/permiso.module';
import { ProductoComboModule } from './producto-combo/producto-combo.module';
import { ProductoTerminadoModule } from './producto-terminado/producto-terminado.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { RolModule } from './rol/rol.module';
import { ScreenModule } from './screen/screen.module';
import { SucursalModule } from './sucursal/sucursal.module';
import { TipoCuentaModule } from './tipo-cuenta/tipo-cuenta.module';
import { TipoListaPrecioModule } from './tipo-lista-precio/tipo-lista-precio.module';
import { TipoTransaccionModule } from './tipo-transaccion/tipo-transaccion.module';
import { TipoVentaModule } from './tipo-venta/tipo-venta.module';
import { TransaccionFinancieraModule } from './transaccion-financiera/transaccion-financiera.module';
import { UsuarioModule } from './usuario/usuario.module';
import { VentaModule } from './venta/venta.module';

@Module({
  imports: [CodigobarraModule, ProductoModule, CompraModule, CuentaFinancieraModule, DetalleCompraModule, DetalleOrdenCompraModule, DetalleVentaModule, EstadoOrdenCompraModule, EstadoProduccionModule, EstadoVentaModule, InsumoProduccionModule, ListaPrecioModule, LoteModule, OrdenCompraModule, OrdenCompraCompraModule, OrdenProduccionModule, PermisoModule, ProductoComboModule, ProductoTerminadoModule, ProveedorModule, RolModule, ScreenModule, SucursalModule, TipoCuentaModule, TipoListaPrecioModule, TipoTransaccionModule, TipoVentaModule, TransaccionFinancieraModule, UsuarioModule, VentaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
