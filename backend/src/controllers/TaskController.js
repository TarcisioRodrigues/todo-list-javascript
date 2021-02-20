//Importações

import db from '../database/connection';

//Metodos
export async function index(){
  const taskes= await db('tasks').select('*');
  return response.json(taskes);
}

export async function create(){
const{plan}=request.body;
const insertTask=await db('tasks').insert({
  plan
});
//Ordem decresente
const tasks= await db('tasks').select('*').first().orderBy('id','desc');
return response.json(tasks);

}

export async function destroy(){
  const {id}=request.params

  await db('tasks').where({id}).del();
  return response.status(204).send('Apagado')
}
//Metodo Atualizar
export async function update(){
  const{id,tasks}=await task.update(request.body);
return res.json({
  id,
  tasks
})
}
