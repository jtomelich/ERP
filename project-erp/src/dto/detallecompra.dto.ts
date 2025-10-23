import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class DetallecompraDto {
    @ApiProperty()
    
    @IsInt()
    id: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    compra_id?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    lote_id?: number;

    @ApiProperty()
    
    @IsInt()
    cantidad: number;

    @ApiProperty()
    
    @IsNumber()
    precio_unitario: number;

}