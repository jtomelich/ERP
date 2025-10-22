import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreatePermisoDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsInt()
  rol_id: number;

  @IsOptional()
  @IsInt()
  screen_id: number;

  @IsOptional()
  @IsBoolean()
  puede_ver: boolean;

  @IsOptional()
  @IsBoolean()
  puede_crear: boolean;

  @IsOptional()
  @IsBoolean()
  puede_editar: boolean;

  @IsOptional()
  @IsBoolean()
  puede_eliminar: boolean;

}