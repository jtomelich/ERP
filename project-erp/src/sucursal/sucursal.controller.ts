import { SucursalDto } from 'src/dto/sucursal.dto';
import { SucursalService } from './sucursal.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('sucursal')
export class SucursalController {
    //conecta el servicio
        constructor(private SucursalService: SucursalService){}
    
        //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.SucursalService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.SucursalService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:SucursalDto){
            return this.SucursalService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: SucursalDto){
            return this.SucursalService.updateDatos(parseInt(Params.id), dto);
        }
}
