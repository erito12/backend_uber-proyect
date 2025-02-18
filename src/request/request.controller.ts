import { Controller, Post, Body, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RequestService } from './request.service';
import { CalculatePriceDto } from './dto/calculate_price.dto';
import { CreateRequestDto } from './dto/create_request.dto';
import { UserRequest } from 'src/entities/request.entity';

@ApiTags('petitions')
@Controller('petitions')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post('calculate-price')
  @ApiOperation({ summary: 'Calcular el precio de un viaje' })
  @ApiResponse({ status: 200, description: 'Precio calculado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Solicitud incorrecta.' })
  async getPrice(@Body() body: CalculatePriceDto): Promise<number> {
    return this.requestService.calculatePrice(
      body.origin,
      body.destination,
      body.carClass,
    );
  }

  @Post(':userId')
  @ApiOperation({ summary: 'Crear una anueva solicitud' })
  @ApiResponse({ status: 200, description: 'Solicitud creada' })
  @ApiResponse({ status: 400, description: 'Solicitud incorrecta.' })
  async createRequest(
    @Param('userId') userId: number,
    @Query() createRequestDto: CreateRequestDto,
  ): Promise<UserRequest> {
    // Cambia aquí
    return this.requestService.createRequest(createRequestDto, userId);
  }
}
