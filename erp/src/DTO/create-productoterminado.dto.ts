import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateProductoterminadoDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsInt()
  orden_id: number;

  @IsOptional()
  @IsInt()
  lote_id: number;

  @IsInt()
  cantidad: number;

}