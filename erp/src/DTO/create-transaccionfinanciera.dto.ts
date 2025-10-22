import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateTransaccionfinancieraDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsInt()
  cuenta_id: number;

  @IsDate()
  fecha: Date;

  @IsOptional()
  @IsInt()
  tipo_id: number;

  @IsNumber()
  monto: number;

  @IsOptional()
  @IsString()
  descripcion: string;

}