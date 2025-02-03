import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Usuario } from './user.entity';

@Entity('choferes')
export class Chofer {
  @PrimaryGeneratedColumn()
  id_chofer: number;

  @OneToOne(() => Usuario, (usuario) => usuario.choferes)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

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
}
