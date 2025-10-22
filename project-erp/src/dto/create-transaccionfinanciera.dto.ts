import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class CreateTransaccionfinancieraDto {
    @ApiProperty()
    
    @IsInt()
    id: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    cuenta_id?: number;

    
    @ApiProperty({ type: Date })
    @IsOptional()
    fecha: Date;

    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    tipo_id?: number;

    @ApiProperty()
    
    @IsNumber()
    monto: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    descripcion?: string;

}