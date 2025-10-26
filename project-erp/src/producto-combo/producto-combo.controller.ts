import { ProductocomboDto } from 'src/dto/productocombo.dto';
import { ProductoComboService } from './producto-combo.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('producto-combo')
export class ProductoComboController {
     //conecta el servicio
        constructor(private ProductoComboService: ProductoComboService){}
    
        //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.ProductoComboService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.ProductoComboService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:ProductocomboDto){
            return this.ProductoComboService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: ProductocomboDto){
            return this.ProductoComboService.updateDatos(parseInt(Params.id), dto);
        }
}
