const express = require('express');
const cors = require('cors');

class Server {
  constructor({ config = { web: { port: 8000 } }, router }) {
    this.config = config;
    this.express = express();

    this.express.disable('x-powered-by');
    this.express.use(router);
    this.express.use(cors());
  }

  start() {
    return new Promise(resolve => {
      this.express.listen(this.config.web.port, () => {
        console.log(`[p ${process.pid}] Listening at port ${3000}`);
        resolve();
      });
    });
  }
}

module.exports = Server;
