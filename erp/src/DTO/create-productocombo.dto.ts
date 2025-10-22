import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateProductocomboDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsInt()
  combo_id: number;

  @IsOptional()
  @IsInt()
  producto_id: number;

  @IsInt()
  cantidad: number;

}