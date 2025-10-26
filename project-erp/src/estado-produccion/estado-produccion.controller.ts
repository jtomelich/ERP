import { EstadoproduccionDto } from 'src/dto/estadoproduccion.dto';
import { EstadoProduccionService } from './estado-produccion.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('estado-produccion')
export class EstadoProduccionController {
    //conecta el servicio
        constructor(private EstadoProduccionService: EstadoProduccionService){}
    
        //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.EstadoProduccionService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.EstadoProduccionService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:EstadoproduccionDto){
            return this.EstadoProduccionService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: EstadoproduccionDto){
            return this.EstadoProduccionService.updateDatos(parseInt(Params.id), dto);
        }
}
