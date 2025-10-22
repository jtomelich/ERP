import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateScreenDto {
  @IsInt()
  id: number;

  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion: string;

}