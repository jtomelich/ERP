import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class CreateLoteDto {
    @ApiProperty()
    
    @IsInt()
    id: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    codigo_barra_id?: number;

   
    @ApiProperty({ type: Date })
    @IsOptional()
    fecha_vencimiento?: Date;

    @ApiProperty()
    
    @IsInt()
    cantidad: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    ubicacion?: string;

}