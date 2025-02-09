// src/choferes/chofer.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Driver } from 'src/entities/driver.entity';

import { Repository } from 'typeorm';

import { UserService } from 'src/user/user.service';
import { CreateChoferDto } from './dto_drivers/create_drivers.dto';

@Injectable()
export class ChoferService {
  constructor(
    @InjectRepository(Driver)
    private readonly choferRepository: Repository<Driver>,
    private readonly usuarioService: UserService, // Inyecta el servicio de perfil de usuario
  ) {}

  async createChofer(
    createChoferDto: CreateChoferDto,
    usuarioId: number,
  ): Promise<Driver> {
    const user = await this.usuarioService.findUsuarioById(usuarioId); // Usa el servicio para encontrar al usuario

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const Driver = this.choferRepository.create({
      ...CreateChoferDto,
      user, // Asocia el chofer al usuario existente
    });

    return await this.choferRepository.save(Driver);
  }

  async findDriverById(id_chofer: number): Promise<Driver> {
    const driver = await this.choferRepository.findOne({
      where: { id_chofer },
    });

    if (!driver) {
      throw new NotFoundException(`Chofer con ID ${id_chofer} no encontrado`);
    }
    return driver;
  }
}
