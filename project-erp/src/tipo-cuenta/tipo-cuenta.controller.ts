import { TipocuentaDto } from 'src/dto/tipocuenta.dto';
import { TipoCuentaService } from './tipo-cuenta.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('tipo-cuenta')
export class TipoCuentaController {
    //conecta el servicio
        constructor(private TipoCuentaService: TipoCuentaService){}
    
        //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.TipoCuentaService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.TipoCuentaService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:TipocuentaDto){
            return this.TipoCuentaService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: TipocuentaDto){
            return this.TipoCuentaService.updateDatos(parseInt(Params.id), dto);
        }
}
