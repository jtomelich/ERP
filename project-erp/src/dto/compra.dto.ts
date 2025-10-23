import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class CompraDto {
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
    fecha?: Date;


    @ApiProperty()
    
    @IsNumber()
    total: number;

}