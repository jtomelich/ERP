import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateSucursalDto {
  @IsInt()
  id: number;

  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  direccion: string;

}