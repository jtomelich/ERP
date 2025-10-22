import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class UpdateVentaDto {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsOptional()
  @IsInt()
  usuario_id?: number;

  @IsOptional()
  @IsDate()
  fecha?: Date;

  @IsOptional()
  @IsInt()
  estado_id?: number;

  @IsOptional()
  @IsNumber()
  total?: number;

}