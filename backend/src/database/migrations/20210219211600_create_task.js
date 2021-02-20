//Migration de criação de tarefas
exports.up = function(knex)  {
  return knex.schema.createTable('task', table => {
    table.increments('id').primary();
    table.string('tasks').notNullable();
  })
}
exports.down = function(knex)  {
    return knex.schema.dropTable('task');
  }