import { Module } from '@nestjs/common';
import { PerfilUsuarioModule } from './perfil_usuario/perfil_usuario.module';
import { PerfilChoferModule } from './perfil_chofer/perfil_chofer.module';

@Module({
  imports: [PerfilUsuarioModule, PerfilChoferModule]
})
export class PerfilModule {}
