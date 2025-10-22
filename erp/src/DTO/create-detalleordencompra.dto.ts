import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateDetalleordencompraDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsInt()
  orden_id: number;

  @IsOptional()
  @IsInt()
  producto_id: number;

  @IsInt()
  cantidad_solicitada: number;

  @IsOptional()
  @IsNumber()
  precio_estimado: number;

}