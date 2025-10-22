import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateUsuarioDto {
  @IsInt()
  id: number;

  @IsString()
  nombre: string;

  @IsString()
  correo: string;

  @IsString()
  contrasena: string;

  @IsOptional()
  @IsInt()
  rol_id: number;

}