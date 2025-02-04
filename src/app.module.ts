import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './database/database.config';
import { ChoferModule } from './choferes/choferes.module';
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ChoferModule,
    UserModule,
    VehicleModule,
  ],
})
export class AppModule {}
