import { TipotransaccionDto } from 'src/dto/tipotransaccion.dto';
import { TipoTransaccionService } from './tipo-transaccion.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('tipo-transaccion')
export class TipoTransaccionController {
    //conecta el servicio
        constructor(private TipoTransaccionService: TipoTransaccionService){}
    
        //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.TipoTransaccionService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.TipoTransaccionService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:TipotransaccionDto){
            return this.TipoTransaccionService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: TipotransaccionDto){
            return this.TipoTransaccionService.updateDatos(parseInt(Params.id), dto);
        }
}
