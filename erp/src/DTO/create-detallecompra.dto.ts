import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateDetallecompraDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsInt()
  compra_id: number;

  @IsOptional()
  @IsInt()
  lote_id: number;

  @IsInt()
  cantidad: number;

  @IsNumber()
  precio_unitario: number;

}