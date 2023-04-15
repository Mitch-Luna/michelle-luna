import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { VentasService } from './ventas.service';
import { CreateVentaDto } from './dto/create-venta.dto';

@Controller('ventas')
export class VentasController {
  constructor(private readonly productServiceRepo: VentasService) {}

  //Metodo para crear un producto
  @Post()
  create(@Body() productoDto: CreateVentaDto) {
    return this.productServiceRepo.create(productoDto);
  }

  //Metodo para mostrar todos los productos
  @Get()
  findAll() {
    return this.productServiceRepo.findAll();
  }

  //Metodo para mostrar un producto especifico
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.productServiceRepo.findOne(id);
  }

  //Eliminar un producto especifico
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.productServiceRepo.remove(id);
  }

  //Crear método patch, para actualizar
  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateProductoDto: CreateVentaDto,
  ) {
    return this.productServiceRepo.update(id, updateProductoDto);
  }
}
