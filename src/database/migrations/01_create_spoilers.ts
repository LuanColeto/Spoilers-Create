import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('spoilers', table => {
            table.increments('id').primary();
            table.string('title').notNullable();
            table.string('name').notNullable();
            table.string('description').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('spoilers');
}
