import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateInsumoproduccionDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsInt()
  orden_id: number;

  @IsOptional()
  @IsInt()
  producto_id: number;

  @IsInt()
  cantidad: number;

}