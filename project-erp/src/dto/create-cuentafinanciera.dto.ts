import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class CreateCuentafinancieraDto {
    @ApiProperty()
    
    @IsInt()
    id: number;

    @ApiProperty()
    
    @IsString()
    nombre: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    tipo_id?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    saldo?: number;

}