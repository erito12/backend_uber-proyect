// chofer.dto.ts
import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDriversDto {
  @ApiProperty({ description: 'Dirección del chofer', required: false })
  @IsOptional()
  @IsString()
  direccion?: string;
}
