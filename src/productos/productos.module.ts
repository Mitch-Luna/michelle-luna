import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { ProductsController} from './productos.controller';
import { ProductsService } from './productos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Producto])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
