import { DetalleordencompraDto } from 'src/dto/detalleordencompra.dto';
import { DetalleOrdenCompraService } from './detalle-orden-compra.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('detalle-orden-compra')
export class DetalleOrdenCompraController {

    //conectar el servicio
    constructor(private DetalleOrdenCompraService: DetalleOrdenCompraService){}

    //traer todos los datos 
    @Get()
    @HttpCode(HttpStatus.OK)
    index()
    {
        return this.DetalleOrdenCompraService.getDatos();
    }

    //traer 1 dato
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    show(@Param() params)
    {
        return this.DetalleOrdenCompraService.getDato(parseInt(params.id));
    }

    //crear
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto:DetalleordencompraDto){
        return this.DetalleOrdenCompraService.addDatos(dto);
    }

    //Modificar
    @Put(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param() Params, @Body() dto: DetalleordencompraDto){
        return this.DetalleOrdenCompraService.updateDatos(parseInt(Params.id), dto);
    }    

}
