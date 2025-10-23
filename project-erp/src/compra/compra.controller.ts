import { CompraDto } from 'src/dto/compra.dto';
import { CompraService } from './compra.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('compra')
export class CompraController {

    //conectar el servicio
    constructor(private CompraService: CompraService){}

    //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.CompraService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.CompraService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:CompraDto){
            return this.CompraService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: CompraDto){
            return this.CompraService.updateDatos(parseInt(Params.id), dto);
        }


}
