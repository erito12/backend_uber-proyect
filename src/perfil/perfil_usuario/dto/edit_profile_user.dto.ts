// src/usuarios/dto/update-usuario.dto.ts
import { IsOptional, IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUsuarioDto {


  @ApiProperty({ required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  contrasena?: string;
}
