import { ListaprecioDto } from 'src/dto/listaprecio.dto';
import { ListaPrecioService } from './lista-precio.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('lista-precio')
export class ListaPrecioController {
    //conecta el servicio
        constructor(private ListaPrecioService: ListaPrecioService){}
    
        //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.ListaPrecioService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.ListaPrecioService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:ListaprecioDto){
            return this.ListaPrecioService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: ListaprecioDto){
            return this.ListaPrecioService.updateDatos(parseInt(Params.id), dto);
        }
}
