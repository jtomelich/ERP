import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateTipolistaprecioDto {
  @IsInt()
  id: number;

  @IsString()
  nombre: string;

}