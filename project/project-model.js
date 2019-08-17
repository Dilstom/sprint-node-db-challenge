const db = require('../data/db-config');

module.exports = {
 find,
 add,
 findById,
};

function find() {
 return db('projects');
}
function findById(id) {
 return db('projects').where({ id });
}

function add(info) {
 return db('projects').insert(info);
}
