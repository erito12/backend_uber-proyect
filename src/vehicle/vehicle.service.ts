import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChoferService } from 'src/choferes/choferes.service';
import { Vehicle } from 'src/entities/vehicles.entity';
import { Repository } from 'typeorm';
import { CreateVehicleDto } from './vehicle_dto/create_vehicle.dto';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
    private readonly choferService: ChoferService,
  ) {}

  async createVehicle(
    createVehicleDto: CreateVehicleDto,
    driverId: number,
  ): Promise<Vehicle> {
    const driver = await this.choferService.findDriverById(driverId);

    if (!driver) {
      throw new Error('Usuario no encontrado');
    }

    const vehicle = this.vehicleRepository.create({
      ...createVehicleDto, // Cambiado a createVehicleDto
      driver, // Asocia el chofer al vehículo
    });
    return await this.vehicleRepository.save(vehicle);
  }

  async findVehicleById(id_vehiculo: number): Promise<Vehicle> {
    const vehicle = await this.vehicleRepository.findOne({
      where: { id_vehiculo },
    });

    if (!vehicle) {
      throw new NotFoundException(
        `Vehiculo con ID_vehiculo ${id_vehiculo} no encontrado`,
      );
    }
    return vehicle;
  }

  async findVehicleByMatricula(matricula: string): Promise<Vehicle> {
    const vehicle = await this.vehicleRepository.findOne({
      where: { matricula },
    });

    if (!vehicle) {
      throw new NotFoundException(`Vehiculo con ${matricula} no encontrado`);
    }
    return vehicle;
  }
}
