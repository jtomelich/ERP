
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ScreenDto } from 'src/dto/screen.dto';

@Injectable()
export class ScreenService {
    //uso de prisma
        private prisma:any;
        constructor()
        {
            this.prisma=new PrismaClient();
        }
    
        //Metodo para obtener todo
        async getDatos(){
            try{
                return await this.prisma.screen.findMany({
                    orderBy:[{id:'asc'}],
                });
            }
            catch(error){
                console.error('Error al obtener datos: ',error);
                throw error;
            }
        }
    
        //Metodo para traer 1 dato
        async getDato(id:any){
            try{
                let dato = await this.prisma.screen.findFirst({
                    where: {id:id}
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
        async addDatos(dto: ScreenDto){
            try{
                //Validar si existe
                let existing = await this.prisma.screen.findFirst({
                    where: {nombre: dto.nombre}
                });
    
                //en caso de que exista
                if(existing)
                {
                    throw new HttpException({
                        estado: HttpStatus.BAD_REQUEST,
                        menaje: 'Ya existe'
                    },HttpStatus.BAD_REQUEST);
                }
    
                await this.prisma.screen.create({
                    data:{
                        nombre: dto.nombre,
                        descripcion: dto.descripcion
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
        async updateDatos(id:any, dto:ScreenDto){
            try{
                //verifica si exite
                let existing = await this.prisma.screen.findFirst({
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
                await this.prisma.screen.update({
                    where: {id: id},
                    data: {
                        nombre: dto.nombre,
                        descripcion: dto.descripcion
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
