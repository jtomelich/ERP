import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class UsuarioDto {
    @ApiProperty()
    
    @IsInt()
    id: number;

    @ApiProperty()
    
    @IsString()
    nombre: string;

    @ApiProperty()
    
    @IsString()
    correo: string;

    @ApiProperty()
    
    @IsString()
    contrasena: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    rol_id?: number;

}