import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chofer } from 'src/entities/driver.entity';
import { ChoferService } from './choferes.service';
import { ChoferController } from './choferes.controller';

import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Chofer]), UserModule],
  providers: [ChoferService],
  controllers: [ChoferController],
  exports: [ChoferService],
})
export class ChoferModule {}
