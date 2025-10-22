import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductoDto {
    @ApiProperty()
    
    @IsInt()
    id: number;

    @ApiProperty()
    
    @IsString()
    nombre: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    descripcion?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    es_combo?: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    stock_minimo?: number;

}