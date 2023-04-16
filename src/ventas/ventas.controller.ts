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
  constructor(private readonly ventaServiceRepo: VentasService) {}

  //Metodo para crear un venta
  @Post()
  create(@Body() ventatoDto: CreateVentaDto) {
    return this.ventaServiceRepo.create(ventatoDto);
  }

  //Metodo para mostrar todas las ventas
  @Get()
  findAll() {
    return this.ventaServiceRepo.findAll();
  }

  //Metodo para mostrar una venta en especifico
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.ventaServiceRepo.findOne(id);
  }

  //Eliminar una venta en especifico
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.ventaServiceRepo.remove(id);
  }

  //Crear método patch, para actualizar
  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateVentaDto: CreateVentaDto,
  ) {
    return this.ventaServiceRepo.update(id, updateVentaDto);
  }
}
