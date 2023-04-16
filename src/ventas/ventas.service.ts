import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ventas } from './entities/venta.entity';
import { CreateVentaDto } from './dto/create-venta.dto';

@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(Ventas)
    private readonly ventasRepository: Repository<Ventas>,
  ) {}

  //Metodo para crear un producto
  async create(ventaDto: CreateVentaDto) {
    const venta = this.ventasRepository.create(ventaDto);
    await this.ventasRepository.save(venta);

    return venta;
  }

  //Metodo para visualizar todos los productos
  findAll() {
    return this.ventasRepository.find();
  }

  //Metodo para visualizar un producto especifico
  findOne(id: string) {
    return this.ventasRepository.findOneBy({ id });
  }

  //Remover un producto especifico
  async remove(id: string) {
    const venta = await this.findOne(id);
    await this.ventasRepository.remove(venta);
    return 'Venta eliminado satisfactoriamente';
  }

  //Actualizar un producto especifico
  async update(id: string, cambios: CreateVentaDto) {
    const findVenta = await this.findOne(id);
    const updatedVenta = await this.ventasRepository.merge(
      findVenta,
      cambios,
    );

    return this.ventasRepository.save(updatedVenta);
  }
}
