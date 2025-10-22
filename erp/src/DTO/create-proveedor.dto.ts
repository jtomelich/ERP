import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateProveedorDto {
  @IsInt()
  id: number;

  @IsString()
  nombre: string;

  @IsString()
  nit: string;

  @IsOptional()
  @IsString()
  contacto: string;

  @IsOptional()
  @IsString()
  telefono: string;

  @IsOptional()
  @IsString()
  correo: string;

  @IsOptional()
  @IsString()
  direccion: string;

  @IsOptional()
  @IsString()
  tipo: string;

}