import * as dotenv from 'dotenv';
dotenv.config();
export const ormConfig = {
  name: 'default',
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  dropSchema: false,
  migrationsRun: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
};
