
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoDto } from 'src/dto/producto.dto';


@Controller('producto')
export class ProductoController {

    //conecta el servicio
    constructor(private ProductoService: ProductoService){}

    //traer todos los datos
    @Get()
    @HttpCode(HttpStatus.OK)
    index()
    {
        return this.ProductoService.getDatos();
    }

    //traer 1 dato
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    show(@Param() params)
    {
        return this.ProductoService.getDato(parseInt(params.id));
    }

    //crear
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto:ProductoDto){
        return this.ProductoService.addDatos(dto);
    }

    //Modificar
    @Put(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param() Params, @Body() dto: ProductoDto){
        return this.ProductoService.updateDatos(parseInt(Params.id), dto);
    }

}
