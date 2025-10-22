import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateEstadoproduccionDto {
  @IsInt()
  id: number;

  @IsString()
  nombre: string;

}