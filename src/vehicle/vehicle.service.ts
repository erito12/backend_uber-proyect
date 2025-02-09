import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChoferService } from 'src/drivers/drivers.service';
import { Vehicle } from 'src/entities/vehicles.entity';
import { Repository } from 'typeorm';
import { CreateVehicleDto } from './vehicle_dto/create_vehicle.dto';
import { FilterVehiclesDto } from './vehicle_dto/filter_vehicle.dto';

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

  async findAll(
    filterDto: FilterVehiclesDto,
  ): Promise<{ vehicles: Vehicle[]; total: number }> {
    const { matricula, modelo, capacidad, page = 1, limit = 10 } = filterDto; // Valores por defecto

    const query = this.vehicleRepository.createQueryBuilder('vehicle');

    if (matricula) {
      query.andWhere('vehicle.matricula = :matricula', { matricula });
    }

    if (modelo) {
      query.andWhere('vehicle.modelo = :modelo', { modelo });
    }

    if (capacidad) {
      query.andWhere('vehicle.capacidad = :capacidad', { capacidad });
    }

    // Implementar paginación
    const [vehicles, total] = await query
      .skip((page - 1) * limit) // Saltar las entradas de las páginas anteriores
      .take(limit) // Limitar el número de resultados
      .getManyAndCount(); // Obtener los resultados y el total

    return { vehicles, total }; // Retornar los vehículos y el total
  }

  async deleteVehicle(id_vehiculo: number): Promise<void> {
    const result = await this.vehicleRepository.delete(id_vehiculo);

    if (result.affected === 0) {
      throw new NotFoundException(
        `Vehículo con ID ${id_vehiculo} no encontrado`,
      );
    }
  }
}
