import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,

} from 'typeorm';
import { Usuario } from './user.entity';

@Entity('choferes')
export class Chofer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre_completo: string;

  @Column()
  edad: number;

  @Column({ length: 20})
  carne_identidad: string;

  @Column({ length: 50})
  licencia: string;

  @Column({ length: 15})
  numero_telefono: string;

  @Column({ length: 255})
  direccion: string;

  @Column()
  puntuacion: number;

  @Column({length:20})
  estado:string


}
