import { OrdencompraDto } from 'src/dto/ordencompra.dto';
import { OrdenCompraService } from './orden-compra.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('orden-compra')
export class OrdenCompraController {
    //conecta el servicio
        constructor(private OrdenCompraService: OrdenCompraService){}
    
        //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.OrdenCompraService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.OrdenCompraService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:OrdencompraDto){
            return this.OrdenCompraService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: OrdencompraDto){
            return this.OrdenCompraService.updateDatos(parseInt(Params.id), dto);
        }
}
