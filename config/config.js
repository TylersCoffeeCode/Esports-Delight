require('dotenv').config()
module.exports = {
  development: {
    database: "Esport_DB",
    dialect: 'postgres'
  },
  test: {
    database: "Esport_DB_Test",
    dialect: 'postgres'
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}




// {
//   "development": {
//     "database": "Esport_DB",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "test": {
//     "database": "Esport_DB_Test",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "production": {
//     "database": "Esports_DB_Production",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   }
// }
