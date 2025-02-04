// src/choferes/choferes.controller.ts
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
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
  @ApiResponse({ status: 200, description: 'User logged in successfully.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  async getVehicle(@Param('id') id: number): Promise<Vehicle> {
    return await this.vehicleService.findVehicleById(id);
  }

  @Get('filter')
  async filterVehicles(@Query() query: FilterVehiclesDto): Promise<Vehicle[]> {
    console.log('Filtros recibidos:', query);
    return this.vehicleService.findVehiclesByFilters(query);
  }
  @Get()
  @ApiResponse({ status: 200, description: 'Lista de vehículos.' })
  async getAllVehicles(
    @Query() filterDto: FilterVehiclesDto, // Ajuste aquí
  ): Promise<Vehicle[]> {
    return this.vehicleService.findAll(filterDto);
  }
}
