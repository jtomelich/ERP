import { DetalleventaDto } from 'src/dto/detalleventa.dto';
import { DetalleVentaService } from './detalle-venta.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('detalle-venta')
export class DetalleVentaController {
    //conecta el servicio
        constructor(private DetalleVentaService: DetalleVentaService){}
    
        //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.DetalleVentaService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.DetalleVentaService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:DetalleventaDto){
            return this.DetalleVentaService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: DetalleventaDto){
            return this.DetalleVentaService.updateDatos(parseInt(Params.id), dto);
        }
}
