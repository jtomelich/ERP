import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateLoteDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsInt()
  codigo_barra_id: number;

  @IsOptional()
  @IsDate()
  fecha_vencimiento: Date;

  @IsInt()
  cantidad: number;

  @IsOptional()
  @IsString()
  ubicacion: string;

}