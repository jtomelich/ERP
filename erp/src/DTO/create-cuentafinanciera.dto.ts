import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateCuentafinancieraDto {
  @IsInt()
  id: number;

  @IsString()
  nombre: string;

  @IsOptional()
  @IsInt()
  tipo_id: number;

  @IsOptional()
  @IsNumber()
  saldo: number;

}