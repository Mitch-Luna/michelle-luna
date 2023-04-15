import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Producto {
    @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  marca: string;

  @Column({ type: 'numeric' })
  precio: number;

  @Column({ type: 'text' })
  procesador: string;

  @Column({ type: 'text' })
  memoriaRAM: string;
}
