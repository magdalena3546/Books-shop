// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
export const ormConfig = {
  name: 'default',
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Shuri3546#',
  database: 'books-shop',
  synchronize: true,
  dropSchema: false,
  migrationsRun: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
};
