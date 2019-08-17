const db = require('../data/db-config');

module.exports = {
 find,
 add,
};

function find() {
 return db('resources');
}

async function add(info) {
 const [id] = await db('resources').insert(info);
 return db('resources').where({ id });
}
