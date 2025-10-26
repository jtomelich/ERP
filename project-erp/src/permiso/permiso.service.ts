
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PermisoDto } from 'src/dto/permiso.dto';

@Injectable()
export class PermisoService {
    //uso de prisma
        private prisma:any;
        constructor()
        {
            this.prisma=new PrismaClient();
        }
    
        //Metodo para obtener todo
        async getDatos(){
            try{
                return await this.prisma.permiso.findMany({
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
                let dato = await this.prisma.permiso.findFirst({
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
        async addDatos(dto: PermisoDto){
            try{
                
                await this.prisma.permiso.create({
                    data:{
                        rol_id: dto.rol_id,
                        screen_id: dto.screen_id,
                        puede_ver: dto.puede_ver,
                        puede_crear: dto.puede_crear,
                        puede_editar: dto.puede_editar,
                        puede_eliminar: dto.puede_eliminar
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
        async updateDatos(id:any, dto:PermisoDto){
            try{
                //verifica si exite
                let existing = await this.prisma.permiso.findFirst({
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
                await this.prisma.permiso.update({
                    where: {id: id},
                    data: {
                        rol_id: dto.rol_id,
                        screen_id: dto.screen_id,
                        puede_ver: dto.puede_ver,
                        puede_crear: dto.puede_crear,
                        puede_editar: dto.puede_editar,
                        puede_eliminar: dto.puede_eliminar
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
