import { LoteDto } from 'src/dto/lote.dto';
import { LoteService } from './lote.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('lote')
export class LoteController {
    //conecta el servicio
        constructor(private LoteService: LoteService){}
    
        //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.LoteService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.LoteService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:LoteDto){
            return this.LoteService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: LoteDto){
            return this.LoteService.updateDatos(parseInt(Params.id), dto);
        }
}
