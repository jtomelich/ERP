import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CodigobarraModule } from './codigobarra/codigobarra.module';
import { ProductoModule } from './producto/producto.module';

@Module({
  imports: [CodigobarraModule, ProductoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
