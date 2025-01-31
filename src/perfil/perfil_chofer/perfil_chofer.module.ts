import { Module } from '@nestjs/common';
import { PerfilChoferService } from './perfil_chofer.service';
import { PerfilChoferController } from './perfil_chofer.controller';

@Module({
  providers: [PerfilChoferService],
  controllers: [PerfilChoferController]
})
export class PerfilChoferModule {}
