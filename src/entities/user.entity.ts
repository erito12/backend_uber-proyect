import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne } from 'typeorm';
import { Chofer } from './driver.entity';

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nombre_completo: string;

    @Column({ length: 50, unique: true })
    usuario: string;

    @Column({ length: 255 })
    contrasena: string;

    @Column({ length: 100, nullable: true })
    email?: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fecha_creacion: Date;

    @Column({ length: 20 })
    rol: 'admin' | 'chofer' | 'cliente';

}
