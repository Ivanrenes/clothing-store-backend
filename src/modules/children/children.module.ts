import { Module } from '@nestjs/common';
import { ChildrenService } from './children.service';
import { ChildrenController } from './children.controller';
import { childrenProviders } from './entities/children.providers';
import { ParentsService } from '../parents/parents.service';
import { parentsProviders } from '../parents/entities/parents.providers';

@Module({
  controllers: [ChildrenController],
  providers: [
    ChildrenService,
    ...childrenProviders,
    ParentsService,
    ...parentsProviders,
  ],
})
export class ChildrenModule {}
