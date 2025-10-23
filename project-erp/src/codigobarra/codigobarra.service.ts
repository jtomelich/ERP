
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CodigobarraDto } from 'src/dto/codigobarra.dto';


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

    //Traer 1 dato
    async getDato(id:any){
        try{
            let dato = await this.prisma.codigobarra.findFirst({
                where: {codigo: id}
            });

            if(!dato){
                throw new HttpException({
                    estado: HttpStatus.BAD_REQUEST,
                    mensaje: 'No se encontro'
                }, HttpStatus.BAD_REQUEST,
            {
                cause:{
                    name:"",
                    message:""
                }
            });
            }
            else{
                return dato;
            }
        }
        catch(error){
            console.error('Error al obtener la informacion: ',error);
            throw error;
        }
    }

    //Metodo para agregar
     async addDatos(dto: CodigobarraDto){
            try{
                //Validar si existe
                let existing = await this.prisma.producto.findFirst({
                    where: {codigo: dto.codigo}
                });
    
                //en caso de que exista
                if(existing)
                {
                    throw new HttpException({
                        estado: HttpStatus.BAD_REQUEST,
                        menaje: 'Ya existe'
                    },HttpStatus.BAD_REQUEST);
                }
    
                await this.prisma.producto.create({
                    data:{
                        codigo: dto.codigo,
                        producto_id: dto.producto_id
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

        //editar
            async updateDatos(id:any, dto:CodigobarraDto){
                try{
                    //verifica si exite
                    let existing = await this.prisma.codigobarra.findFirst({
                        where: {id: id}
                    });
        
                    //en caso de no existir
                    if(!existing){
                        throw new HttpException(
                            {
                                estado: HttpStatus.BAD_REQUEST,
                                mensaje: 'No se puede actualizar'
                            },
                            HttpStatus.BAD_REQUEST
                        );
                    }
        
                    //Actualizar
                    await this.prisma.producto.update({
                        where: {id: id},
                        data: {
                            codigo: dto.codigo,
                            producto_id: dto.producto_id
                        }
                    });
                }
                catch(error){
                    console.error('Error al actualizar: ',error);
                    throw new HttpException(
                        {
                            estado: HttpStatus.INTERNAL_SERVER_ERROR,
                            mensaje: 'Error al actualizar'
                        },
                        HttpStatus.INTERNAL_SERVER_ERROR
                    );
                }
            }


        

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