import type { Knex } from "knex";

const TABLE_NAME = "rel_tasks_users";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TABLE_NAME, (table: Knex.TableBuilder) => {
    table.integer("user_id", 10).unsigned().references("id").inTable("users");
    table.integer("task_id", 10).unsigned().references("id").inTable("tasks");
    table.primary(["user_id", "task_id"]);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TABLE_NAME);
}
