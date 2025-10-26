import { OrdenproduccionDto } from 'src/dto/ordenproduccion.dto';
import { OrdenProduccionService } from './orden-produccion.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('orden-produccion')
export class OrdenProduccionController {
    //conecta el servicio
        constructor(private OrdenProduccionService: OrdenProduccionService){}
    
        //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.OrdenProduccionService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.OrdenProduccionService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:OrdenproduccionDto){
            return this.OrdenProduccionService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: OrdenproduccionDto){
            return this.OrdenProduccionService.updateDatos(parseInt(Params.id), dto);
        }
}
