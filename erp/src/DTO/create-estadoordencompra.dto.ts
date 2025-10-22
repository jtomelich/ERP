import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateEstadoordencompraDto {
  @IsInt()
  id: number;

  @IsString()
  nombre: string;

}