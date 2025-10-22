import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class CreateDetalleventaDto {
    @ApiProperty()
    
    @IsInt()
    id: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    venta_id?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    codigo_barra_id?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    producto_id?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    tipo_venta_id?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    tipo_lista_id?: number;

    @ApiProperty()
    
    @IsInt()
    cantidad: number;

    @ApiProperty()
    
    @IsNumber()
    precio_unitario: number;

}