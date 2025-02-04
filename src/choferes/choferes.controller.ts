// src/choferes/choferes.controller.ts
import { Controller, Post, Body, Query } from '@nestjs/common';
import { Chofer } from 'src/entities/driver.entity';
import { ChoferService } from './choferes.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateChoferDto } from './dto_choferes/create_choferes.dto';

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
  ): Promise<Chofer> {
    return this.choferService.createChofer(createChoferDto, usuarioId); // Llama al método correcto
  }
}
