import { OrdenCompraCompraService } from './orden-compra-compra.service';
import { OrdencompracompraDto } from 'src/dto/ordencompracompra.dto';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('orden-compra-compra')
export class OrdenCompraCompraController {
    //conecta el servicio
        constructor(private OrdenCompraCompraService: OrdenCompraCompraService){}
    
        //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.OrdenCompraCompraService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.OrdenCompraCompraService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:OrdencompracompraDto){
            return this.OrdenCompraCompraService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: OrdencompracompraDto){
            return this.OrdenCompraCompraService.updateDatos(parseInt(Params.id), dto);
        }
}
