import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ventas {
@PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'numeric' })
  cantidad_vendida: number;

  @Column({ type: 'date' })
  fecha_venta: number;

  @Column({ type: 'numeric' })
  iva: number;

  @Column({ type: 'numeric' })
  numero_factura: number;

  @Column({ type: 'numeric' })
  descuento: number;
}
