const { Client } = require('pg');
export const client = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  database: 'backenddb',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
