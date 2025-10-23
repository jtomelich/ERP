//import { codigobarra } from './../../node_modules/@prisma/client/client';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
//import {PrismaClient} from 'src/generated/client'

@Injectable()
export class CodigobarraService {
  
    //uso de prisma
    private prisma:any;
    constructor()
    {
        this.prisma=new PrismaClient();
    }

    //Metodo para obtener todos
    async getDatos(){
        try{
            return await this.prisma.codigobarra.findMany({
                orderBy:[{id:'asc'}],
            });
        }
        catch(error){
            console.error('Error al obtener datos: ', error);
            throw error;
        }
    }

    //Metodo para agregar
    

}

/*//import { CodigobarraService } from './codigobarra.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
//import { PrismaClient } from '../generated/client';
import { CreateCodigobarraDto } from 'src/dto/create-codigobarra.dto';

@Injectable()
export class CodigobarraService 
{
    //uso de prisma
    private prisma:any;
    constructor()
    {
        this.prisma=new PrismaClient();
    }

    //agregar
    async addDatos(dto: CreateCodigobarraDto){
        try{
            //validar si exite
            let existing = await this.prisma.codigobarra.findFirst({
                where: {codigo: dto.codigo}
            });

            if(existing)
            {
                throw new HttpException(
                    {
                        estado: HttpStatus.BAD_REQUEST,
                        menaje: 'Ya existe'
                    },
                    HttpStatus.BAD_REQUEST
                );
            }

            await this.prisma.codigobarra.create({
                data:{
                    codigo:     dto.codigo,
                    producto_id:dto.producto_id
                }
            });

            return {estado: 'ok', mesaje: 'Carga exitosa'}

        }
        catch(error){
            console.error('Error al agregar: ', error)
            throw new HttpException(
                {estado: HttpStatus.INTERNAL_SERVER_ERROR,
                mensaje: 'Error al agregar'},
                HttpStatus.INTERNAL_SERVER_ERROR
            ); 
        }
    }
}
*/