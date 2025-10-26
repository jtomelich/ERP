import { ProductoterminadoDto } from 'src/dto/productoterminado.dto';
import { ProductoTerminadoService } from './producto-terminado.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('producto-terminado')
export class ProductoTerminadoController {
     //conecta el servicio
        constructor(private ProductoTerminadoService: ProductoTerminadoService){}
    
        //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.ProductoTerminadoService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.ProductoTerminadoService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:ProductoterminadoDto){
            return this.ProductoTerminadoService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: ProductoterminadoDto){
            return this.ProductoTerminadoService.updateDatos(parseInt(Params.id), dto);
        }
}
