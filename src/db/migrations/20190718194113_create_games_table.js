exports.up = function(knex) {
  return knex.schema.createTable("games", function(table) {
    table.increments("id");
    table.jsonb("board").notNullable();
    table
      .boolean("isOver")
      .notNullable()
      .defaultTo(false);
    table
      .datetime("started")
      .notNullable()
      .defaultTo(knex.fn.now(6));
    table.datetime("finished");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("games");
};
