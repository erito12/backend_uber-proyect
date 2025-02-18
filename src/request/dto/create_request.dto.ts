import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRequestDto {
  @ApiProperty({ description: 'Licencia de conducción del chofer' })
  @IsNotEmpty()
  @IsString()
  fecha_hora: string;

  @ApiProperty({ description: 'Licencia de conducción del chofer' })
  @IsNotEmpty()
  @IsString()
  lugar_origen: string;
  @ApiProperty({ description: 'Licencia de conducción del chofer' })
  @IsNotEmpty()
  @IsString()
  lugar_destino: string;
  @ApiProperty({ description: 'Licencia de conducción del chofer' })
  @IsNotEmpty()
  @IsString()
  tipo_solicitud: string;
  @ApiProperty({ description: 'Licencia de conducción del chofer' })
  @IsNotEmpty()
  @IsString()
  clase_vehiculo: string;

  @ApiProperty({ description: 'Licencia de conducción del chofer' })
  @IsNotEmpty()
  @IsString()
  capacidad_requerida: number;
  @ApiProperty({ description: 'Licencia de conducción del chofer' })
  @IsNotEmpty()
  @IsString()
  precio: number;

  @ApiProperty({ description: 'Licencia de conducción del chofer' })
  @IsNotEmpty()
  @IsString()
  state_request: 'processing' | 'accepted' | 'confirmed' | 'rejected';
}
