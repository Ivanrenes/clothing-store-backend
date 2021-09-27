import { Parent } from './parent.entity';
import { PARENT_REPOSITORY } from '../../../core/constants';

export const parentsProviders = [
  {
    provide: PARENT_REPOSITORY,
    useValue: Parent,
  },
];
