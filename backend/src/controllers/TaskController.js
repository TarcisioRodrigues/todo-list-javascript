//Importações
import {Request, Response} from 'express';
import db from '../database/connection';

//Metodos
export async function index(){
  const tasks= await db('task').select('*');
  return response.json(tasks);
}

export async function create(){
const{plan}=request.body;
const insertTask=await db('task').insert({
  plan
});
//Ordem decresente
const tasks= await db('task').select('*').first().orderBy('id','desc');
return response.json(tasks);

}

export async function destroy(){
  const {id}=request.params

  await db('task').where({id}).del();
  return response.status(204).send('Apagado')
}