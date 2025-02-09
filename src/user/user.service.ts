import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUsuarioDto } from './dto/edit_profile_user.dto';

@Injectable()
export class UserService {
  // Cambiado a PerfilUsuarioService
  constructor(
    @InjectRepository(User)
    private usuarioRepository: Repository<User>,
  ) {}

  async findUsuarioById(id_usuario: number): Promise<User> {
    const user = await this.usuarioRepository.findOne({
      where: { id_usuario },
    });

    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id_usuario} no encontrado`);
    }

    return user;
  }

  async actualizarUsuario(
    id_usuario: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<User> {
    // Busca el usuario por ID
    const user = await this.usuarioRepository.findOne({
      where: { id_usuario },
    });
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    // Actualiza los campos que se pasaron en el DTO
    Object.assign(user, updateUsuarioDto);

    // Guarda los cambios
    return this.usuarioRepository.save(user);
  }
}
