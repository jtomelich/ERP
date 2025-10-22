import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateCompraDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsInt()
  proveedor_id: number;

  @IsDate()
  fecha: Date;

  @IsNumber()
  total: number;

}