//Migration de criação de tarefas
exports.up = function(knex)  {
  return knex.schema.createTable('task', table => {
    table.increments('id').primary();
    table.string('tasks').notNullable();
    table.boolean("checked").notNullable().defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now())
  table.timestamp('update_at').defaultTo(knex.fn.now())
  })
}
exports.down = function(knex)  {
    return knex.schema.dropTable('task');
  }