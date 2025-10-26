import { TransaccionfinancieraDto } from 'src/dto/transaccionfinanciera.dto';
import { TransaccionFinancieraService } from './transaccion-financiera.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('transaccion-financiera')
export class TransaccionFinancieraController {
    //conecta el servicio
        constructor(private TransaccionFinancieraService: TransaccionFinancieraService){}
    
        //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.TransaccionFinancieraService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.TransaccionFinancieraService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:TransaccionfinancieraDto){
            return this.TransaccionFinancieraService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: TransaccionfinancieraDto){
            return this.TransaccionFinancieraService.updateDatos(parseInt(Params.id), dto);
        }
}
