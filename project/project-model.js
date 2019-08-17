const db = require('../data/db-config');

module.exports = {
 find,
 add,
};

function find() {
 return db('projects');
}

function add(info) {
 return db('projects').insert(info);
}
