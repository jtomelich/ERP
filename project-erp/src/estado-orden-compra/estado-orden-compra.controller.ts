import { EstadoordencompraDto } from 'src/dto/estadoordencompra.dto';
import { EstadoOrdenCompraService } from './estado-orden-compra.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('estado-orden-compra')
export class EstadoOrdenCompraController {
    //conecta el servicio
        constructor(private EstadoOrdenCompraService: EstadoOrdenCompraService){}
    
        //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.EstadoOrdenCompraService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.EstadoOrdenCompraService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:EstadoordencompraDto){
            return this.EstadoOrdenCompraService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: EstadoordencompraDto){
            return this.EstadoOrdenCompraService.updateDatos(parseInt(Params.id), dto);
        }

}
