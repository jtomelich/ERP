import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class UpdateCompraDto {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsOptional()
  @IsInt()
  proveedor_id?: number;

  @IsOptional()
  @IsDate()
  fecha?: Date;

  @IsOptional()
  @IsNumber()
  total?: number;

}