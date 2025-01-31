import { Body, Controller, Get, Param, Patch, Query } from "@nestjs/common";
import { Usuario } from "src/entities/user.entity";
import { PerfilUsuarioService } from "./perfil_usuario.service"; // Asegúrate de que el nombre sea correcto
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { UpdateUsuarioDto } from "./dto/edit_profile_user.dto";

@ApiTags('User')
@Controller('usuarios')
export class PerfilUsuarioController { // Cambiado a PerfilUsuarioController
  constructor(private readonly perfilUsuarioService: PerfilUsuarioService) {}

  @Get(':id')
  @ApiResponse({ status: 200, description: 'User logged in successfully.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  async getUsuario(@Param('id') id: number): Promise<Usuario> {
    return this.perfilUsuarioService.findUsuarioById(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Usuario actualizado exitosamente.', type: Usuario })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  async actualizarUsuario(
    @Param('id') id: number,
    @Query() updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    return this.perfilUsuarioService.actualizarUsuario(id, updateUsuarioDto);
  }
}
