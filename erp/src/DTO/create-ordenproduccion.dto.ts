import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateOrdenproduccionDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsInt()
  producto_id: number;

  @IsDate()
  fecha_inicio: Date;

  @IsOptional()
  @IsDate()
  fecha_fin: Date;

  @IsOptional()
  @IsInt()
  estado_id: number;

}