import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateOrdencompraDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsInt()
  proveedor_id: number;

  @IsDate()
  fecha: Date;

  @IsOptional()
  @IsInt()
  estado_id: number;

  @IsOptional()
  @IsString()
  observaciones: string;

}