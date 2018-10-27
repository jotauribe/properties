const { Router } = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//const statusMonitor = require('express-status-monitor');
//const compression = require('compression');
//const controller = require('./utils/createControllerRoutes');

module.exports = ({ config }) => {
  const rootRouter = Router();

  /* istanbul ignore if */
  if (config.env === 'development2') {
    rootRouter.use(statusMonitor());
  }

  const apiRouter = Router();

  apiRouter.use(cors()).use(bodyParser.json());
  //.use(compression());

  /*
   * Add your API routes here
   *
   * You can use the `controllers` helper like this:
   * apiRouter.use('/users', controller(controllerPath))
   *
   * The `controllerPath` is relative to the `interfaces/http` folder
   */

  //apiRouter.use('/users', controller('user/UsersController'));

  rootRouter.use('/api', apiRouter);

  return rootRouter;
};
