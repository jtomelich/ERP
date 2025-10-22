import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductoService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.productoCreateInput) {
    return this.prisma.producto.create({ data });
  }

  async findAll() {
    return this.prisma.producto.findMany();
  }

  async findOne(id: number) {
    return this.prisma.producto.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.productoUpdateInput) {
    return this.prisma.producto.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.producto.delete({ where: { id } });
  }
}