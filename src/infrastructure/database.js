const knex = require('knex');

let database;

database = require('knex')({
  client: 'pg',
  connection: {
    host: 'ec2-54-225-110-152.compute-1.amazonaws.com',
    user: 'qmrznzizjbdqsj',
    password:
      'a133aee47114e89f8c83405ef411c44d95803f6b65369a13c06968b342270954',
    database: 'd396cgp3qu030j'
  }
});

if (process.env.NODE_ENV === 'test')
  database = knex = require('knex')({
    client: 'sqlite3',
    connection: ':memory:',
    pool: {
      min: 1,
      max: 1,
      disposeTimeout: 360000 * 1000,
      idleTimeoutMillis: 360000 * 1000
    }
  });

module.exports = database;
