import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class SucursalDto {
    @ApiProperty()
    
    @IsInt()
    id: number;

    @ApiProperty()
    
    @IsString()
    nombre: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    direccion?: string;

}