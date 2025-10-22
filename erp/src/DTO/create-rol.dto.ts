import { IsInt, IsString, IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateRolDto {
  @IsInt()
  id: number;

  @IsString()
  nombre: string;

}