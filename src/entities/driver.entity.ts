import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Vehicle } from './vehicles.entity';

@Entity('choferes')
export class Driver {
  @PrimaryGeneratedColumn()
  id_chofer: number;

  @Column({ length: 50 })
  licencia_conduccion: string;

  @Column({ length: 50, nullable: true })
  licencia_operativa: string;

  @Column({ type: 'int', default: 0 })
  annos_experiencia: number;

  @Column({ length: 255, nullable: true })
  direccion: string;

  @Column({ type: 'int', default: 100 })
  puntacion: number;

  @Column({ length: 15, default: 'en linea' })
  estado: 'en linea' | 'desconectado' | 'ocupado' | 'libre';

  @OneToOne(() => User, (user) => user.driver)
  @JoinColumn({ name: 'id_usuario' })
  user: User;

  @OneToOne(() => Vehicle, (vehicle) => vehicle.driver)
  vehicle: Vehicle;
}
