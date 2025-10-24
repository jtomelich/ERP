import { DetallecompraDto } from 'src/dto/detallecompra.dto';
import { DetalleCompraService } from './detalle-compra.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('detalle-compra')
export class DetalleCompraController {

    //conectar el servicio
    constructor(private DetalleCompraService: DetalleCompraService){}

    //traer todos los datos
    @Get()
    @HttpCode(HttpStatus.OK)
    index()
    {
        return this.DetalleCompraService.getDatos();
    }

    //traer 1 dato
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    show(@Param() params)
    {
        return this.DetalleCompraService.getDato(parseInt(params.id));
    }

    //crear
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto:DetallecompraDto){
        return this.DetalleCompraService.addDatos(dto);
    }

    //Modificar
    @Put(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param() Params, @Body() dto: DetallecompraDto){
        return this.DetalleCompraService.updateDatos(parseInt(Params.id), dto);
    }    


}
