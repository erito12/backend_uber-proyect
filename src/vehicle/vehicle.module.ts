import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from 'src/entities/vehicles.entity';
import { DriverModule } from 'src/drivers/drivers.module';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle]), DriverModule],
  providers: [VehicleService],
  controllers: [VehicleController],
  exports: [VehicleService],
})
export class VehicleModule {}
