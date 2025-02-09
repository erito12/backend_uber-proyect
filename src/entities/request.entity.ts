import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Vehicle } from './vehicles.entity';
import { User } from './user.entity';

@Entity('request')
export class Request {
  @PrimaryGeneratedColumn()
  id_solicitud: number;

  @Column()
  fecha_hora: string;

  @Column({ length: 255 })
  lugar_origen: string;

  @Column({ length: 255 })
  lugar_destino: string;

  @Column({ length: 10 })
  tipo_solicitud: string;

  @Column({ length: 50 })
  clase_vehiculo: string;

  @Column()
  capacidad_requerida: number;

  @Column()
  precio: number;

  @Column({
    type: 'enum',
    enum: ['processing', 'accepted', 'confirmed', 'rejected'],
    default: 'processing',
  })
  state_request: 'processing' | 'accepted' | 'confirmed' | 'rejected';

  @OneToOne(() => Vehicle, (vehicle) => vehicle.request)
  @JoinColumn({ name: 'id_vehicle' })
  vehicle: Vehicle;

  @OneToOne(() => User, (user) => user.request)
  @JoinColumn({ name: 'id_usuario' })
  user: User;
}
