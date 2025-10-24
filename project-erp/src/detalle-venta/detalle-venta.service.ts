import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/extension';

@Injectable()
export class DetalleVentaService {

    //uso prisma
    private prisma:any;
    constructor()
    {
        this.prisma=new PrismaClient();
    }
}
