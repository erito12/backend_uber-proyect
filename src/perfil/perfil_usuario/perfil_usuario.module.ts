import { Module } from '@nestjs/common';
import { PerfilUsuarioService } from './perfil_usuario.service'; // Este nombre debe coincidir
import { PerfilUsuarioController } from './perfil_usuario.controller'; // Este nombre debe coincidir
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  providers: [PerfilUsuarioService],
  controllers: [PerfilUsuarioController],
  exports: [PerfilUsuarioService],
})
export class PerfilUsuarioModule {}
