const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "test",
    password: "test",
    database: "test"
  },
  searchPath: ["knex", "public"]
});

module.exports = db;
