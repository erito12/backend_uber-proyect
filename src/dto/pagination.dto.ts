// src/vehicle_dto/pagination.dto.ts
import { IsInt, IsOptional, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  page?: number = 1; // Página por defecto

  @IsOptional()
  @IsInt()
  @Min(1)
  limit?: number = 10; // Tamaño de página por defecto
}
