import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateOrdencompracompraDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsInt()
  orden_id: number;

  @IsOptional()
  @IsInt()
  compra_id: number;

}