import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ventas } from './entities/venta.entity';
import { VentasController} from './ventas.controller';
import { VentasService } from './ventas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ventas])],
  controllers: [VentasController],
  providers: [VentasService],
})
export class VentasModule {}
