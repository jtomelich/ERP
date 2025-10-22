import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateListaprecioDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsInt()
  producto_id: number;

  @IsOptional()
  @IsInt()
  sucursal_id: number;

  @IsOptional()
  @IsInt()
  tipo_lista_id: number;

  @IsNumber()
  precio: number;

}