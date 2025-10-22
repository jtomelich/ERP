import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductoterminadoDto {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsOptional()
  @IsInt()
  orden_id?: number;

  @IsOptional()
  @IsInt()
  lote_id?: number;

  @IsOptional()
  @IsInt()
  cantidad?: number;

}