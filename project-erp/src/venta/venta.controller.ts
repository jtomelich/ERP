import { VentaDto } from 'src/dto/venta.dto';
import { VentaService } from './venta.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('venta')
export class VentaController {
    //conecta el servicio
        constructor(private VentaService: VentaService){}
    
        //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.VentaService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.VentaService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:VentaDto){
            return this.VentaService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: VentaDto){
            return this.VentaService.updateDatos(parseInt(Params.id), dto);
        }
}
