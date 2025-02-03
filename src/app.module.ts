import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './database/database.config';
import { ChoferModule } from './choferes/choferes.module';
import { AutomobileModule } from './automobile/automobile.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ChoferModule, UserModule, AutomobileModule],
})
export class AppModule {}
