import { CuentafinancieraDto } from 'src/dto/cuentafinanciera.dto';
import { CuentaFinancieraService } from './cuenta-financiera.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put  } from '@nestjs/common';

@Controller('cuenta-financiera')
export class CuentaFinancieraController {

    //conectar el servicio
    constructor(private CuentaFinancieraService: CuentaFinancieraService){}
    
    //traer todos los datos
    @Get()
    @HttpCode(HttpStatus.OK)
    index()
    {
        return this.CuentaFinancieraService.getDatos();
    }

    //traer 1 dato
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    show(@Param() params)
    {
        return this.CuentaFinancieraService.getDato(parseInt(params.id));
    }

    //crear
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto:CuentafinancieraDto){
        return this.CuentaFinancieraService.addDatos(dto);
    }

    //Modificar
    @Put(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param() Params, @Body() dto: CuentafinancieraDto){
        return this.CuentaFinancieraService.updateDatos(parseInt(Params.id), dto);
    }

}
