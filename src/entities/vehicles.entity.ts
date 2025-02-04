import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Chofer } from './driver.entity';

@Entity('vehicle')
export class Vehicle {
  @PrimaryGeneratedColumn()
  id_vehiculo: number;

  @Column({ length: 20 })
  matricula: string;

  @Column({ length: 50 })
  modelo: string;

  @Column()
  capacidad: number;

  @Column({ length: 255, nullable: true })
  foto_vehiculo: string;

  @Column({ nullable: true })
  climatizado: boolean;

  @Column({ nullable: true })
  musica: boolean;

  @Column({ nullable: true })
  comodidad_asientos: boolean;
  @OneToOne(() => Chofer, (chofer) => chofer.vehicle)
  @JoinColumn({ name: 'id_chofer' })
  driver: Chofer;
}
