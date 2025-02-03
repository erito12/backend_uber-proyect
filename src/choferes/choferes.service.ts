// src/choferes/chofer.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chofer } from 'src/entities/driver.entity';

import { Repository } from 'typeorm';
import { CreateChoferDto } from './dto_choferes/create_choferes.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ChoferService {
  constructor(
    @InjectRepository(Chofer)
    private readonly choferRepository: Repository<Chofer>,
    private readonly usuarioService: UserService, // Inyecta el servicio de perfil de usuario
  ) {}

  async createChofer(
    createChoferDto: CreateChoferDto,
    usuarioId: number,
  ): Promise<Chofer> {
    const usuario = await this.usuarioService.findUsuarioById(usuarioId); // Usa el servicio para encontrar al usuario

    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }

    const Chofer = this.choferRepository.create({
      ...CreateChoferDto,
      usuario, // Asocia el chofer al usuario existente
    });

    return await this.choferRepository.save(Chofer);
  }
}
