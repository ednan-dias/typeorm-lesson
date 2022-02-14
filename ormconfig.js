console.log('DATABASE_URL', process.env.DATABASE_URL);
const { DATABASE_URL, NODE_ENV } = process.env;

module.exports = {
  type: 'postgres',
  url: DATABASE_URL,
  entities:
    NODE_ENV === 'development'
      ? ['src/models/**/*.ts']
      : ['dist/models/**/*.js'],
  migrations:
    NODE_ENV === 'development'
      ? ['src/database/migrations/**/*.ts']
      : ['dist/database/migrations/**/*.js'],
  cli: {
    migrationsDir: 'src/database/migrations/',
    entitiesDir: 'src/models',
  },
};
