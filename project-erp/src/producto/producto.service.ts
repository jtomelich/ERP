
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ProductoDto } from 'src/dto/producto.dto';

@Injectable()
export class ProductoService {

    //uso de prisma
    private prisma:any;
    constructor()
    {
        this.prisma=new PrismaClient();
    }

    //Metodo para obtener todo
    async getDatos(){
        try{
            return await this.prisma.producto.findMany({
                orderBy:[{id:'asc'}],
            });
        }
        catch(error){
            console.error('Error al obtener datos: ',error);
            throw error;
        }
    }

    //Metodo para agregar
    async addDatos(dto: ProductoDto){
        try{
            //Validar si existe
            let existing = await this.prisma.producto.findFirst({
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

            await this.prisma.producto.create({
                data:{
                    nombre: dto.nombre,
                    descripcion: dto.descripcion,
                    stock_minimo: dto.stock_minimo,
                    es_combo: dto.es_combo
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
