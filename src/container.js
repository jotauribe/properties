const { createContainer, asClass, asFunction, asValue } = require('awilix');

const Application = require('./application/Application');
const config = require('../config');
const Server = require('./interfaces/http/Server');
const router = require('./interfaces/http/router');

const container = createContainer();

// System

container
  .register({
    app: asClass(Application).singleton(),
    server: asClass(Server).singleton()
  })
  .register({
    router: asFunction(router).singleton()
  })
  .register({
    config: asValue(config)
  });

// Repositories
// container.register({
//   usersRepository: asClass(SequelizeUsersRepository).singleton()
// });

// Database
// container.register({
//   database: asValue(database),
//   UserModel: asValue(UserModel)
// });

// Operations
// container.register({
//   createUser: asClass(CreateUser),
//   getAllUsers: asClass(GetAllUsers),
//   getUser: asClass(GetUser),
//   updateUser: asClass(UpdateUser),
//   deleteUser: asClass(DeleteUser)
// });

// Serializers
// container.register({
//   userSerializer: asValue(UserSerializer)
// });

module.exports = container;
