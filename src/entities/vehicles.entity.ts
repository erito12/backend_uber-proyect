import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Driver } from './driver.entity';
import { Request } from './request.entity';

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

  @Column({
    type: 'enum',
    enum: ['A', 'B', 'C', 'Moto'],
  })
  class_vehicle: 'A' | 'B' | 'C' | 'Moto';

  @Column({ length: 255, nullable: true })
  foto_vehiculo: string;

  @Column({ nullable: true })
  climatizado: boolean;

  @Column({ nullable: true })
  musica: boolean;

  @Column({ nullable: true })
  comodidad_asientos: boolean;

  @OneToOne(() => Driver, (driver) => driver.vehicle)
  @JoinColumn({ name: 'id_chofer' })
  driver: Driver;

  @OneToOne(() => Request, (request) => request.vehicle)
  request: Request;
}
