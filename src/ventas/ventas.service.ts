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
    const product = this.ventasRepository.create(ventaDto);
    await this.ventasRepository.save(product);

    return product;
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
    const product = await this.findOne(id);
    await this.ventasRepository.remove(product);
    return 'Producto eliminado satisfactoriamente';
  }

  //Actualizar un producto especifico
  async update(id: string, cambios: CreateVentaDto) {
    const findProduct = await this.findOne(id);
    const updatedProducto = await this.ventasRepository.merge(
      findProduct,
      cambios,
    );

    return this.ventasRepository.save(updatedProducto);
  }
}
