import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class UpdateDetalleventaDto {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsOptional()
  @IsInt()
  venta_id?: number;

  @IsOptional()
  @IsInt()
  codigo_barra_id?: number;

  @IsOptional()
  @IsInt()
  producto_id?: number;

  @IsOptional()
  @IsInt()
  tipo_venta_id?: number;

  @IsOptional()
  @IsInt()
  tipo_lista_id?: number;

  @IsOptional()
  @IsInt()
  cantidad?: number;

  @IsOptional()
  @IsNumber()
  precio_unitario?: number;

}