import { ScreenDto } from 'src/dto/screen.dto';
import { ScreenService } from './screen.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('screen')
export class ScreenController {
     //conecta el servicio
        constructor(private ScreenService: ScreenService){}
    
        //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.ScreenService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.ScreenService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:ScreenDto){
            return this.ScreenService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: ScreenDto){
            return this.ScreenService.updateDatos(parseInt(Params.id), dto);
        }
}
