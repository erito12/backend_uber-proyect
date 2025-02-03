import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Chofer } from 'src/entities/driver.entity';
import { Usuario } from 'src/entities/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'erito',
  password: 'Erito1234',
  database: 'TaxisBD',
  entities: [Usuario, Chofer],
  synchronize: true, // Solo para desarrollo
  // logging: true, // Habilita el logging
  schema: 'ubercuba', // Asegúrate de que el esquema esté definido
};
