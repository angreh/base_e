import type { Knex } from "knex";

const TABLE_NAME = "tasks";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TABLE_NAME, (table: Knex.TableBuilder) => {
    table.increments("id").primary();
    table.string("title", 255).notNullable();
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TABLE_NAME);
}
