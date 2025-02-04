import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from 'src/entities/vehicles.entity';
import { ChoferModule } from 'src/choferes/choferes.module';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle]), ChoferModule],
  providers: [VehicleService],
  controllers: [VehicleController],
  exports: [VehicleService],
})
export class VehicleModule {}
