import { PermisoDto } from 'src/dto/permiso.dto';
import { PermisoService } from './permiso.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('permiso')
export class PermisoController {
    //conecta el servicio
        constructor(private PermisoService: PermisoService){}
    
        //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.PermisoService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.PermisoService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:PermisoDto){
            return this.PermisoService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: PermisoDto){
            return this.PermisoService.updateDatos(parseInt(Params.id), dto);
        }
}
