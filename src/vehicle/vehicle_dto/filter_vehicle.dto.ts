import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FilterVehiclesDto {
  @ApiProperty({
    required: false,
    description: 'Número de matrícula del vehículo',
  })
  @IsOptional()
  @IsString()
  matricula?: string;

  @ApiProperty({ required: false, description: 'Modelo del vehículo' })
  @IsOptional()
  @IsString()
  modelo?: string;
}
