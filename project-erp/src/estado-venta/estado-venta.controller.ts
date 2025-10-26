import { EstadoventaDto } from 'src/dto/estadoventa.dto';
import { EstadoVentaService } from './estado-venta.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('estado-venta')
export class EstadoVentaController {
    //conecta el servicio
        constructor(private EstadoVentaService: EstadoVentaService){}
    
        //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.EstadoVentaService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.EstadoVentaService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:EstadoventaDto){
            return this.EstadoVentaService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: EstadoventaDto){
            return this.EstadoVentaService.updateDatos(parseInt(Params.id), dto);
        }
}
