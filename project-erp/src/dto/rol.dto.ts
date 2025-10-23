import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class RolDto {
    @ApiProperty()
    
    @IsInt()
    id: number;

    @ApiProperty()
    
    @IsString()
    nombre: string;

}