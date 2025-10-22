import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/extension';
import { CreateProductoDto } from 'src/DTO/create-producto.dto';

@Injectable()
export class ProductoService {

    //uso de prisma
    private prisma:any;

    constructor(){ this.prisma = new PrismaClient();}

    async addDatos(dto: CreateProductoDto)
    {
        //validar si ya existe el producto
        let existingProducto = await this.prisma.producto
    }
}
