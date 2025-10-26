import { TipoventaDto } from 'src/dto/tipoventa.dto';
import { TipoVentaService } from './tipo-venta.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('tipo-venta')
export class TipoVentaController {
    //conecta el servicio
        constructor(private TipoVentaService: TipoVentaService){}
    
        //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.TipoVentaService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.TipoVentaService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:TipoventaDto){
            return this.TipoVentaService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: TipoventaDto){
            return this.TipoVentaService.updateDatos(parseInt(Params.id), dto);
        }
}
