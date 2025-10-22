import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductoterminadoDto {
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
    lote_id?: number;

    @ApiProperty()
    
    @IsInt()
    cantidad: number;

}