import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Driver } from 'src/entities/driver.entity';
import { Request } from 'src/entities/request.entity';
import { User } from 'src/entities/user.entity';
import { Vehicle } from 'src/entities/vehicles.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'erito',
  password: 'Erito1234',
  database: 'TaxisBD',
  entities: [User, Driver, Vehicle, Request],
  synchronize: true, // Solo para desarrollo
  // logging: true, // Habilita el logging
  schema: 'ubercuba',
};
