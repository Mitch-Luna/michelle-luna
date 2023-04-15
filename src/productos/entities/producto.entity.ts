import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Producto {
@PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  cantidad: string;

  @Column({ type: 'text' })
  fecha_ingreso: number;

  @Column({ type: 'text' })
  fecha_salida: number;

  @Column({ type: 'numeric' })
  valor: number;

  @Column({ type: 'text' })
  categoria: string;
}
