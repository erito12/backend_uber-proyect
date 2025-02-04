// src/choferes/choferes.controller.ts
import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './vehicle_dto/create_vehicle.dto';
import { Vehicle } from 'src/entities/vehicles.entity';

@ApiTags('Vehicle')
@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'El vehículo ha sido creado.' })
  @ApiResponse({ status: 400, description: 'Solicitud inválida.' })
  async create(
    @Query() createVehicleDto: CreateVehicleDto, // Asegúrate de que el nombre sea correcto
    @Query('choferID') driverId: number,
  ): Promise<Vehicle> {
    return this.vehicleService.createVehicle(createVehicleDto, driverId);
  }
  @Get(':id')
  @ApiResponse({ status: 200, description: 'User logged in successfully.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  async getVehicle(@Param('id') id: number): Promise<Vehicle> {
    return this.vehicleService.findVehicleById(id);
  }
}
