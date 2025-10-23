import { Controller,Get,HttpCode,HttpStatus, Post, Body } from '@nestjs/common';
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

    //crear
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto:ProductoDto){
        return this.ProductoService.addDatos(dto);
    }

}
