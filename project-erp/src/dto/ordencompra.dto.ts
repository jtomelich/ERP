import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class OrdencompraDto {
    @ApiProperty()
    
    @IsInt()
    id: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    proveedor_id?: number;

    @ApiProperty()
    
    
    @ApiProperty({ type: Date })
    @IsOptional()
    fecha: Date;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    estado_id?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    observaciones?: string;

}