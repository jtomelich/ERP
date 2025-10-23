import { CodigobarraDto } from 'src/dto/codigobarra.dto';
import { CodigobarraService } from './codigobarra.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('codigobarra')
export class CodigobarraController {

    //conecta el servicio
    constructor(private CodigobarraService: CodigobarraService){}

    //traer todos los datos
    @Get()
    @HttpCode(HttpStatus.OK)
    index()
    {
        return this.CodigobarraService.getDatos();
    }

    //traer 1 dato
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    show(@Param() params)
    {
        return this.CodigobarraService.getDato(parseInt(params.id));
    }

    //crear
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto:CodigobarraDto){
        return this.CodigobarraService.addDatos(dto);
    }
    
    //Modificar
    @Put(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param() Params, @Body() dto: CodigobarraDto){
        return this.CodigobarraService.updateDatos(parseInt(Params.id), dto);
    }



}
