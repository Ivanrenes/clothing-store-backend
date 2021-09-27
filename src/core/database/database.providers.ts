import { Sequelize } from 'sequelize-typescript';
import { Child } from 'src/modules/children/entities/child.entity';
import { Parent } from 'src/modules/parents/entities/parent.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([User, Parent, Child]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
