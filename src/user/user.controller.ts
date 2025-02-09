import { Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';
import { UpdateUsuarioDto } from './dto/edit_profile_user.dto';

@ApiTags('User')
@Controller('profile-usuarios')
export class UserController {
  // Cambiado a PerfilUsuarioController
  constructor(private readonly UsuarioService: UserService) {}

  @Get(':id')
  @ApiResponse({ status: 200, description: 'User logged in successfully.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  async getUsuario(@Param('id') id: number): Promise<User> {
    return this.UsuarioService.findUsuarioById(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'Usuario actualizado exitosamente.',
    type: User,
  })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  async actualizarUsuario(
    @Param('id') id: number,
    @Query() updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<User> {
    return this.UsuarioService.actualizarUsuario(id, updateUsuarioDto);
  }
}
