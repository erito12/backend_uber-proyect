import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Request]), PetitionsModule],
  providers: [RequestService],
  controllers: [RequestController],
  exports: [RequestService],
})
export class PetitionsModule {}
