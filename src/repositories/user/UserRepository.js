const db = require('../../infrastructure/database');

const save = async function(user) {
  return await db.insert(user).into('USERS');
};

module.exports = { save };
