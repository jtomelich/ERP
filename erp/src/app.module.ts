import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';
import { PrismaModule } from './prisma/prisma.module';
import { EjemploService } from './–flat/servicios/ejemplo/ejemplo.service';
import { ProductoService } from './–flat/servicios/producto/producto.service';

@Module({
  imports: [ProductoModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, EjemploService, ProductoService],
})
export class AppModule {}
