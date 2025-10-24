import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DetallecompraDto } from 'src/dto/detallecompra.dto';

@Injectable()
export class DetalleCompraService {

    //uso de prisma
    private prisma:any;
    constructor()
    {
        this.prisma= new PrismaClient();
    }

     //Metodo para obtener todo
        async getDatos(){
            try{
                return await this.prisma.detallecompra.findMany({
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
                let dato = await this.prisma.detallecompra.findFirst({
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
        async addDatos(dto: DetallecompraDto){
            try{
    
                await this.prisma.detallecompra.create({
                    data:{
                        compra_id: dto.compra_id,
                        lote_id: dto.lote_id,
                        cantidad: dto.cantidad,
                        precio_unitario: dto.precio_unitario
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
        async updateDatos(id:any, dto:DetallecompraDto){
            try{
                //verifica si exite
                let existing = await this.prisma.detallecompra.findFirst({
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
                await this.prisma.detallecompra.update({
                    where: {id: id},
                    data: {
                        compra_id: dto.compra_id,
                        lote_id: dto.lote_id,
                        cantidad: dto.cantidad,
                        precio_unitario: dto.precio_unitario
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
