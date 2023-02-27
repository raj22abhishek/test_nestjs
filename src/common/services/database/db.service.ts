import { createConnection } from 'typeorm';

export const dbProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: '',
        port: 3306,
        username: '',
        password: '',
        database: '',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      }),
  },
];
