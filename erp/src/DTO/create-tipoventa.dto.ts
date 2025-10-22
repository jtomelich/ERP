import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateTipoventaDto {
  @IsInt()
  id: number;

  @IsString()
  nombre: string;

}