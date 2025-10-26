import { Module } from '@nestjs/common';
import { PermisoService } from './permiso.service';
import { PermisoController } from './permiso.controller';

@Module({
  providers: [PermisoService],
  controllers: [PermisoController]
})
export class PermisoModule {}
