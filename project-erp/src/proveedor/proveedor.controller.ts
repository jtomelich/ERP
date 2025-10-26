import { ProveedorDto } from 'src/dto/proveedor.dto';
import { ProveedorService } from './proveedor.service';
import { Controller,Get,HttpCode,HttpStatus, Post, Body, Param, Put } from '@nestjs/common';

@Controller('proveedor')
export class ProveedorController {
    //conecta el servicio
        constructor(private ProveedorService: ProveedorService){}
    
        //traer todos los datos
        @Get()
        @HttpCode(HttpStatus.OK)
        index()
        {
            return this.ProveedorService.getDatos();
        }
    
        //traer 1 dato
        @Get(':id')
        @HttpCode(HttpStatus.OK)
        show(@Param() params)
        {
            return this.ProveedorService.getDato(parseInt(params.id));
        }
    
        //crear
        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() dto:ProveedorDto){
            return this.ProveedorService.addDatos(dto);
        }
    
        //Modificar
        @Put(':id')
        @HttpCode(HttpStatus.OK)
        update(@Param() Params, @Body() dto: ProveedorDto){
            return this.ProveedorService.updateDatos(parseInt(Params.id), dto);
        }
}
