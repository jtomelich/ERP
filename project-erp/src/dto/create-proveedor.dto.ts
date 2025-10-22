import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class CreateProveedorDto {
    @ApiProperty()
    
    @IsInt()
    id: number;

    @ApiProperty()
    
    @IsString()
    nombre: string;

    @ApiProperty()
    
    @IsString()
    nit: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    contacto?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    telefono?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    correo?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    direccion?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    tipo?: string;

}