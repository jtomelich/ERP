import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateEstadoventaDto {
  @IsInt()
  id: number;

  @IsString()
  nombre: string;

}