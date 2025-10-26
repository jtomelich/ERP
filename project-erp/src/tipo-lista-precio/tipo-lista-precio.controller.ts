import { TipolistaprecioDto } from 'src/dto/tipolistaprecio.dto';
import { TipoListaPrecioService } from './tipo-lista-precio.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('tipo-lista-precio')
export class TipoListaPrecioController {
     //conecta el servicio
        constructor(private TipoListaPrecioService: TipoListaPrecioService){}
    
        //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.TipoListaPrecioService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.TipoListaPrecioService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:TipolistaprecioDto){
            return this.TipoListaPrecioService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: TipolistaprecioDto){
            return this.TipoListaPrecioService.updateDatos(parseInt(Params.id), dto);
        }
}
