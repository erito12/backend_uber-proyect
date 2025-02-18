import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { UserRequest } from 'src/entities/request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserRequest]), UserModule],
  providers: [RequestService],
  controllers: [RequestController],
  exports: [RequestService],
})
export class PetitionsModule {}
