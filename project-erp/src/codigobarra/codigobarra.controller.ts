import { CodigobarraService } from './codigobarra.service';
import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('codigobarra')
export class CodigobarraController {

    //conecta el servicio
    constructor(private CodigobarraService: CodigobarraService){}

    //traer todos los datos
    @Get()
    @HttpCode(HttpStatus.OK)
    index()
    {
        return this.CodigobarraService.getDatos();
    }
}
