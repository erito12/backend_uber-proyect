import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Chofer } from 'src/entities/driver.entity';
import { Usuario } from 'src/entities/user.entity';
import { Vehicle } from 'src/entities/vehicles.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'erito',
  password: 'Erito1234',
  database: 'TaxisBD',
  entities: [Usuario, Chofer, Vehicle],
  synchronize: true, // Solo para desarrollo
  // logging: true, // Habilita el logging
  schema: 'ubercuba',
};
