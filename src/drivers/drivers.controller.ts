// src/choferes/choferes.controller.ts
import { Controller, Post, Body, Query } from '@nestjs/common';
import { Driver } from 'src/entities/driver.entity';
import { ChoferService } from './drivers.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateChoferDto } from './dto_drivers/create_drivers.dto';

@ApiTags('Drivers')
@Controller('drivers')
export class ChoferController {
  constructor(private readonly choferService: ChoferService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'El chofer ha sido creado.' })
  @ApiResponse({ status: 400, description: 'Solicitud inválida.' })
  async create(
    @Body() createChoferDto: CreateChoferDto,
    @Query('usuarioId') usuarioId: number, // Cambia 'username' y 'password' a 'usuarioId'
  ): Promise<Driver> {
    return this.choferService.createChofer(createChoferDto, usuarioId); // Llama al método correcto
  }
}
