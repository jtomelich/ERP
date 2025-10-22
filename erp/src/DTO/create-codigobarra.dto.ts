import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateCodigobarraDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsInt()
  producto_id: number;

  @IsString()
  codigo: string;

}