import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class CreateListaprecioDto {
    @ApiProperty()
    
    @IsInt()
    id: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    producto_id?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    sucursal_id?: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    tipo_lista_id?: number;

    @ApiProperty()
    
    @IsNumber()
    precio: number;

}