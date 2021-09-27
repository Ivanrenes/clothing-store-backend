import { Module } from '@nestjs/common';
import { ParentsService } from './parents.service';
import { ParentsController } from './parents.controller';
import { parentsProviders } from './entities/parents.providers';

@Module({
  controllers: [ParentsController],
  providers: [ParentsService, ...parentsProviders],
})
export class ParentsModule {}
