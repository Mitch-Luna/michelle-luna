import { IsAlphanumeric, IsNumber, IsString } from 'class-validator';
export class CreateProductoDto {
  @IsString()
  cantidad: string;

  @IsAlphanumeric()
  fecha_ingreso: number;

  @IsAlphanumeric()
  fecha_salida: number;

  @IsNumber()
  valor: number;

  @IsString()
  categoria: string;

}
