import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateTipocuentaDto {
  @IsInt()
  id: number;

  @IsString()
  nombre: string;

}