import { UsuarioDto } from 'src/dto/usuario.dto';
import { UsuarioService } from './usuario.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('usuario')
export class UsuarioController {
    //conecta el servicio
        constructor(private UsuarioService: UsuarioService){}
    
        //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.UsuarioService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.UsuarioService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:UsuarioDto){
            return this.UsuarioService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: UsuarioDto){
            return this.UsuarioService.updateDatos(parseInt(Params.id), dto);
        }
}
