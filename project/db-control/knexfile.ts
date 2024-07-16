import { Knex } from "knex";

const config: Knex.Config = {
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "password",
    database: "effort_app",
  },
};

export default config;
