import { IsDate, IsNumber, IsString } from 'class-validator';
export class CreateVentaDto {

    @IsNumber()
    cantidad_vendida: number;
  
    @IsDate()
    fecha_venta: number;
  
    @IsNumber()
    iva:number;
  
    @IsNumber()
    numero_factura: number;
  
    @IsNumber()
    descuento: number;
}
