import { appSchema } from '@nozbe/watermelondb';
import { userSchema } from './userSchema';
import { itemSchema } from './itemSchema';

const schemas = appSchema({
  version: 15,
  tables: [
    userSchema,
    itemSchema
  ]
});

export { schemas };
