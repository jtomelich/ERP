import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class UpdateOrdenproduccionDto {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsOptional()
  @IsInt()
  producto_id?: number;

  @IsOptional()
  @IsDate()
  fecha_inicio?: Date;

  @IsOptional()
  @IsDate()
  fecha_fin?: Date;

  @IsOptional()
  @IsInt()
  estado_id?: number;

}