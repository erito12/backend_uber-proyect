import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
} from 'typeorm';
import { Driver } from './driver.entity';
import { Request } from './request.entity';

@Entity('usuarios')
export class User {
  @PrimaryGeneratedColumn()
  id_usuario: number; // Cambiado a id_usuario para coincidir con la tabla

  @Column({ length: 50 })
  userName: string;

  @Column({ length: 255, nullable: true })
  foto_perfil?: string; // Agregado para la foto de perfil

  @Column({ length: 255 })
  contrasena: string;

  @Column({ length: 100, nullable: true })
  email?: string;

  @Column({ length: 15, nullable: true }) // Agregado para el número de teléfono
  numero_telefono?: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_creacion: Date;

  @Column({
    type: 'enum',
    enum: ['admin', 'chofer', 'cliente', 'turista'],
  }) // Ajustado para incluir 'turista'
  rol: 'admin' | 'chofer' | 'cliente' | 'turista'; // Ajustado para incluir 'turista'

  @OneToOne(() => Driver, (driver) => driver.user)
  driver: Driver;

  @OneToOne(() => Request, (request) => request.user)
  request: Request;
}
