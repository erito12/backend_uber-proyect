import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './database/database.config';
import { DriverModule } from './drivers/drivers.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { PetitionsModule } from './request/request.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    DriverModule,
    UserModule,
    VehicleModule,
    PetitionsModule,
  ],
})
export class AppModule {}
