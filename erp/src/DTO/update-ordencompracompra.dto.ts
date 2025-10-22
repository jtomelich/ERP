import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class UpdateOrdencompracompraDto {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsOptional()
  @IsInt()
  orden_id?: number;

  @IsOptional()
  @IsInt()
  compra_id?: number;

}