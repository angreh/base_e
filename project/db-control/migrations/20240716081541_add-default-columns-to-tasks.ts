import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("tasks", (table: Knex.TableBuilder) => {
    table.text("description").nullable();
    table.integer("duration", 10).unsigned().nullable();
    table.integer("difficulty", 10).unsigned().nullable();
    table.integer("importance", 10).unsigned().nullable();
    table.integer("emotional_tax", 10).unsigned().nullable();
    table.integer("priority", 10).unsigned().nullable();
    table.dateTime("start_date").nullable();
    table.dateTime("end_date").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("tasks", (table: Knex.TableBuilder) => {
    table.dropColumn("description");
    table.dropColumn("duration");
    table.dropColumn("difficulty");
    table.dropColumn("importance");
    table.dropColumn("emotional_tax");
    table.dropColumn("priority");
    table.dropColumn("start_date");
    table.dropColumn("end_date");
  });
}
