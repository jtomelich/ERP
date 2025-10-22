import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateTipotransaccionDto {
  @IsInt()
  id: number;

  @IsString()
  nombre: string;

}