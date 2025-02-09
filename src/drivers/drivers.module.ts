import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Driver } from 'src/entities/driver.entity';
import { ChoferService } from './drivers.service';
import { ChoferController } from './drivers.controller';

import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Driver]), UserModule],
  providers: [ChoferService],
  controllers: [ChoferController],
  exports: [ChoferService],
})
export class DriverModule {}
