//Importações

import { request } from 'express';
import db from '../database/connection';

module.exports={
   async  index(request,response){
    const taskes= await db('task').select('*');
    return response.json(taskes);
  },
  
  async  create(request,response){
  const{tasks}=request.body
  const insertTask=await db('task').insert({
    tasks
  });
  //Ordem decresente
  const taskse= await db('task').select('*').first().orderBy('id','desc');
  return response.json(taskse);
  
  },
  
  async  destroy(request,response){
    const {id}=request.params
  
    await db('task').where({id}).del();
    return response.status(204).send('Apagado')
  },
  //Metodo Atualizar
   async  update(request,response){
    const{tasks}=request.body
     const{id}=request.params
     await db('task').update({tasks})
     .where({id})
     return response.send();
  }
}


