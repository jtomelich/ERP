import { InsumoproduccionDto } from 'src/dto/insumoproduccion.dto';
import { InsumoProduccionService } from './insumo-produccion.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('insumo-produccion')
export class InsumoProduccionController {
    //conecta el servicio
        constructor(private InsumoProduccionService: InsumoProduccionService){}
    
        //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.InsumoProduccionService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.InsumoProduccionService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:InsumoproduccionDto){
            return this.InsumoProduccionService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: InsumoproduccionDto){
            return this.InsumoProduccionService.updateDatos(parseInt(Params.id), dto);
        }
}
