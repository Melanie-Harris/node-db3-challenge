
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
    return db('schemes').where({id: Number(id)});
}

function findSteps(id) {
    return db("steps").were({ id: Number(id) });
}

function add(schemeData) {
    return db("schemes")
    .insert(schemeData)
    .then(id =>({id: ids[0]}))
}

function addStep(stepData, id) {
    return db("steps")
      .insert(stepData)
      .then(id => ({ id: ids[0] }));
}

function update(changes, id) {
    return db("schemes")
      .where('id', Number(id))
      .update(changes);
}

function remove(id) {
    return db("schemes")
      .where("id", Number(id))
      .del();
}

