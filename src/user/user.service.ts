import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUsuarioDto } from './dto/edit_profile_user.dto';

@Injectable()
export class UserService {
  // Cambiado a PerfilUsuarioService
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async findUsuarioById(id_usuario: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { id_usuario },
    });

    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id_usuario} no encontrado`);
    }

    return usuario;
  }

  async actualizarUsuario(
    id_usuario: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    // Busca el usuario por ID
    const usuario = await this.usuarioRepository.findOne({
      where: { id_usuario },
    });
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }

    // Actualiza los campos que se pasaron en el DTO
    Object.assign(usuario, updateUsuarioDto);

    // Guarda los cambios
    return this.usuarioRepository.save(usuario);
  }
}
