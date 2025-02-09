// src/choferes/choferes.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './vehicle_dto/create_vehicle.dto';
import { Vehicle } from 'src/entities/vehicles.entity';
import { FilterVehiclesDto } from './vehicle_dto/filter_vehicle.dto';

@ApiTags('Vehicle')
@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'El vehículo ha sido creado.' })
  @ApiResponse({ status: 400, description: 'Solicitud inválida.' })
  async create(
    @Body() createVehicleDto: CreateVehicleDto, // Asegúrate de que el nombre sea correcto
    @Query('choferID') driverId: number,
  ): Promise<Vehicle> {
    return this.vehicleService.createVehicle(createVehicleDto, driverId);
  }
  @Get('id/:id')
  @ApiResponse({ status: 204, description: 'Vehículo eliminado con éxito.' })
  @ApiResponse({ status: 404, description: 'Vehículo no encontrado.' })
  async getVehicle(@Param('id') id: number): Promise<Vehicle> {
    return await this.vehicleService.findVehicleById(id);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de vehículos.' })
  async getAllVehicles(
    @Query() filterDto: FilterVehiclesDto,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ): Promise<{ vehicles: Vehicle[]; total: number }> {
    // Asignar page y pageSize a filterDto
    filterDto.page = page ? Number(page) : 1; // Valor por defecto 1
    filterDto.limit = limit ? Number(limit) : 10; // Valor por defecto 10

    return this.vehicleService.findAll(filterDto);
  }

  @Delete('id/:id')
  @ApiResponse({ status: 200, description: 'Vehículo eliminado con éxito.' })
  @ApiResponse({ status: 404, description: 'Vehículo no encontrado.' })
  async deleteVehicle(@Param('id') id: number): Promise<void> {
    return this.vehicleService.deleteVehicle(id);
  }
}
