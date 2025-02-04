import {
  IsNotEmpty,
  IsString,
  IsInt,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVehicleDto {
  @ApiProperty({ description: 'Matricula del vehiculo', example: 'S143654' })
  @IsNotEmpty()
  @IsString()
  matricula: string;

  @ApiProperty({ description: 'Modelo del vehiculo', example: 'Lamborjiny' })
  @IsNotEmpty()
  @IsString()
  modelo: string;

  @ApiProperty({ description: 'Capacidad del vehiculo', example: 4 })
  @IsInt()
  @IsNotEmpty()
  capacidad: number;

  @ApiProperty({ description: 'Foto del vehiculo', required: false })
  @IsOptional()
  @IsString()
  foto_vehiculo?: string;

  @ApiProperty({
    description: 'Si el vehiculo cuenta con climatización',
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  climatizado?: boolean;

  @ApiProperty({
    description: 'Si el vehiculo cuenta con música',
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  musica?: boolean;

  @ApiProperty({
    description: 'Si el vehiculo cuenta con asientos cómodos',
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  comodidad_asientos?: boolean;
}
