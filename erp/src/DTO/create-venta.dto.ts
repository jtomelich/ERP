import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateVentaDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsInt()
  usuario_id: number;

  @IsDate()
  fecha: Date;

  @IsOptional()
  @IsInt()
  estado_id: number;

  @IsNumber()
  total: number;

}