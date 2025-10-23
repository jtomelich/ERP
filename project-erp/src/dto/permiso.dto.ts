import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class PermisoDto {
    @ApiProperty()
    
    @IsInt()
    id: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    rol_id?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    screen_id?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    puede_ver?: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    puede_crear?: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    puede_editar?: boolean;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    puede_eliminar?: boolean;

}