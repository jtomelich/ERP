import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class OrdenproduccionDto {
    @ApiProperty()
    
    @IsInt()
    id: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    producto_id?: number;

    
    @ApiProperty({ type: Date })
    @IsOptional()   
    fecha_inicio: Date;

    
    @ApiProperty({ type: Date })
    @IsOptional()
    fecha_fin?: Date;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    estado_id?: number;

}