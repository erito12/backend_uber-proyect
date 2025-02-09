import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CalculatePriceDto {
  @ApiProperty({
    description: 'Origen del viaje',
    example: 'Calle Falsa 123, Ciudad',
  })
  @IsNotEmpty()
  @IsString()
  origin: string;

  @ApiProperty({
    description: 'Destino del viaje',
    example: 'Avenida Siempre Viva 742, Ciudad',
  })
  @IsNotEmpty()
  @IsString()
  destination: string;

  @ApiProperty({ description: 'Clase del auto', example: 'B' })
  @IsNotEmpty()
  @IsString()
  carClass: string;
}
