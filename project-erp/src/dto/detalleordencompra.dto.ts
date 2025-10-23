import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class DetalleordencompraDto {
    @ApiProperty()
    
    @IsInt()
    id: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    orden_id?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    producto_id?: number;

    @ApiProperty()
    
    @IsInt()
    cantidad_solicitada: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsNumber()
    precio_estimado?: number;

}