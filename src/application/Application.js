class Application {
  constructor({ server }) {
    this.server = server;

    // if (database && database.options.logging) {
    //   database.options.logging = logger.info.bind(logger);
    // }
  }

  async start() {
    if (this.database) {
      await this.database.authenticate();
    }

    await this.server.start();
  }
}

module.exports = Application;
