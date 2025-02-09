// chofer.dto.ts
import {
  IsNotEmpty,
  IsString,
  IsInt,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateChoferDto {
  @ApiProperty({ description: 'Licencia de conducción del chofer' })
  @IsNotEmpty()
  @IsString()
  licencia_conduccion: string;

  @ApiProperty({ description: 'Licencia operativa del chofer' })
  @IsOptional()
  @IsString()
  licencia_operativa: string;

  @ApiProperty({ description: 'Años de experiencia', required: false })
  @IsInt()
  @IsOptional()
  annos_experiencia?: number;

  @ApiProperty({ description: 'Dirección del chofer', required: false })
  @IsOptional()
  @IsString()
  direccion?: string;

  @ApiProperty({ description: 'Puntuación del chofer', required: false })
  @IsInt()
  @IsOptional()
  puntacion?: number;

  @ApiProperty({ description: 'Estado del chofer' })
  @IsNotEmpty()
  @IsString()
  @IsEnum(['en linea', 'desconectado', 'ocupado', 'libre'])
  estado: 'en linea' | 'desconectado' | 'ocupado' | 'libre';
}
