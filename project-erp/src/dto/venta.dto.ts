import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class VentaDto {
    @ApiProperty()
    
    @IsInt()
    id: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    usuario_id?: number;

    
    @ApiProperty({ type: Date })
    @IsOptional()
    fecha: Date;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    estado_id?: number;

    @ApiProperty()
    
    @IsNumber()
    total: number;

}