import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PaginationDto } from 'src/dto/pagination.dto';

export class FilterVehiclesDto extends PaginationDto {
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

  @ApiProperty({ required: false, description: 'Cantidad de asisntos' })
  @IsOptional()
  @IsNumber()
  capacidad?: number;
}
