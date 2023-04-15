import { IsDate, IsNumber, IsString } from 'class-validator';
export class CreateProductoDto {
    @IsNumber()
    cantidad:string;

    @IsDate()
    fecha_ingreso:string;

    @IsDate()
    fecha_salida:string;

    @IsNumber()
    valor: number;

    @IsString()
    categioria: string
}
