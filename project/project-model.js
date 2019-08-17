const db = require('../data/db-config');

module.exports = {
 find,
 add,
 findById,
 addTask,
};

function find() {
 return db('projects');
}
function findById(id) {
 return db('projects').where({ id });
}

async function addTask(info, project_id) {
 console.log(info);
 const [id] = await db('tasks').insert({ ...info, project_id });
 return findByIdTask(id);
}
}
