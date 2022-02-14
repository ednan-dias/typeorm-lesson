console.log('DATABASE_URL', process.env.DATABASE_URL);
const { DATABASE_URL, NODE_ENV } = process.env;

// module.exports = {
//   type: 'postgres',
//   url: DATABASE_URL,
//   ssl: NODE_ENV === 'development' ? false : true,
//   extra: {
//     ssl: { rejectUnauthorized: NODE_ENV === 'development' ? true : false },
//   },
//   entities:
//     NODE_ENV === 'development'
//       ? ['src/models/**/*.ts']
//       : ['dist/models/**/*.js'],
//   migrations:
//     NODE_ENV === 'development'
//       ? ['src/database/migrations/**/*.ts']
//       : ['dist/database/migrations/**/*.js'],
//   cli: {
//     migrationsDir: 'src/database/migrations/',
//     entitiesDir: 'src/models',
//   },
// };

NODE_ENV === 'development'
  ? (module.exports = {
      type: 'postgres',
      url: DATABASE_URL,
      entities: ['src/models/**/*.ts'],
      migrations: ['src/database/migrations/**/*.ts'],
      cli: {
        migrationsDir: 'src/database/migrations/',
        entitiesDir: 'src/models',
      },
    })
  : (module.exports = {
      type: 'postgres',
      url: DATABASE_URL,
      ssl: true,
      extra: {
        ssl: { rejectUnauthorized: false },
      },
      entities: NODE_ENV === 'development'['dist/models/**/*.js'],
      migrations: ['dist/database/migrations/**/*.js'],
      cli: {
        migrationsDir: 'src/database/migrations/',
        entitiesDir: 'src/models',
      },
    });
