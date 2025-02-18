import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateRequestDto } from './dto/create_request.dto';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRequest } from 'src/entities/request.entity';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(UserRequest)
    private readonly requestRepository: Repository<UserRequest>,
    private readonly usuarioService: UserService,
  ) {}

  async getDistance(origin: string, destination: string): Promise<number> {
    const response = await axios.get<DistanceMatrixResponse>(
      `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=YOUR_API_KEY`,
    );

    // Verificar que la respuesta tenga los datos esperados
    if (
      response.data &&
      response.data.rows &&
      response.data.rows.length > 0 &&
      response.data.rows[0].elements &&
      response.data.rows[0].elements.length > 0
    ) {
      const distance = response.data.rows[0].elements[0].distance.value; // En metros
      return distance / 1000; // Convertir a kilómetros
    } else {
      throw new Error(
        'No se pudo obtener la distancia. Verifica los orígenes y destinos.',
      );
    }
  }

  async calculatePrice(
    origin: string,
    destination: string,
    clase_vehiculo: string,
  ): Promise<number> {
    const distance = await this.getDistance(origin, destination);
    const pricePerKm = this.getPricePerClass(clase_vehiculo);
    return distance * pricePerKm;
  }

  private getPricePerClass(clase_vehiculo: string): number {
    switch (clase_vehiculo) {
      case 'moto':
        return 100; // Precio por km para clase moto
      case 'C':
        return 120; // Precio por km para clase C
      case 'B':
        return 150; // Precio por km para clase B
      case 'A':
        return 200; // Precio por km para clase A
      default:
        return 120; // Precio por defecto
    }
  }

  async createRequest(
    createRequestDto: CreateRequestDto,
    usuarioId: number,
  ): Promise<UserRequest> {
    const user = await this.usuarioService.findUsuarioById(usuarioId); // Usa el servicio para encontrar al usuario

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const UserRequest = this.requestRepository.create({
      ...createRequestDto,
      user, // Asocia la solicitud al usuario existente
    });

    return await this.requestRepository.save(UserRequest);
  }
}
interface DistanceMatrixResponse {
  rows: {
    elements: {
      distance: {
        value: number; // En metros
      };
    }[];
  }[];
}
