const knex = require('knex')
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development)


module.exports = {
  find,
  findById, 
  findSteps,
  add, 
  addStep, 
  update,
  remove
}


function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({id: Number(id)}) 
}

function findSteps(id) {
    return db("steps")
    .InnerJoin('schemes', 'steps.scheme_id', 'schemes.id')
    .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
    .where('steps.scheme_id', id)
    .orderBy('steps.step_number')

}

function add(schemeData) {
    return db("schemes")//object
    .insert(schemeData)//passing in shceme to database
    .then(ids =>({id: ids[0]}))
}

function addStep(stepData) {
    return db("steps")
      .insert(stepData)
      .then(ids => ({ id: ids[0] }));
}

function update(changes, id) {
    return db("schemes")
      .where('id', Number(id))// finds the id
      .update(changes);//
}

function remove(id) {
    return db("schemes")
      .where("id", Number(id))//finds the id (number will validate if its a number, if not a number entred it will display null)
      .del();
}



