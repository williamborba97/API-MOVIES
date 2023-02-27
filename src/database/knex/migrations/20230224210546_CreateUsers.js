

exports.up = knex => knex.schema.createTable("users",table => {
    table.increments("id").primary();
    table.increments("name");
    table.increments("email");
    table.increments("password");
    table.increments("avatar").("null");
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
}) 

exports.down = knex => knex.schema.droptable("users")
