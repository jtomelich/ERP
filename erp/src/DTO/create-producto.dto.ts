import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateProductoDto {
  @IsInt()
  id: number;

  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion: string;

  @IsOptional()
  @IsBoolean()
  es_combo: boolean;

  @IsOptional()
  @IsInt()
  stock_minimo: number;

}