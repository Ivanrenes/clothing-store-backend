import { Child } from './child.entity';
import { CHILD_REPOSITORY } from '../../../core/constants';

export const childrenProviders = [
  {
    provide: CHILD_REPOSITORY,
    useValue: Child,
  },
];
