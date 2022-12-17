import express, { Application, Router, RequestHandler } from 'express';
import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';
import logger from './logger';

interface ServerConfiguration {
  port?: number;
  middleWares?: RequestHandler[];
  routes?: Router[];
}

class Server {
  private _app: Application;
  private _port: number;
  private _server?: http.Server;

  constructor(serverConf: ServerConfiguration) {
    this._app = express();
    this._port = serverConf.port || 3000;

    if (serverConf.middleWares) {
      this._middlewares(serverConf.middleWares);
    }

    if (serverConf.routes) {
      this._routes(serverConf.routes);
    }
  }

  private _middlewares(middleWares: RequestHandler[]) {
    middleWares.forEach((middleWare) => this._app.use(middleWare));
  }

  private _routes(routes: Router[]) {
    routes.forEach((route) => this._app.use(route));
  }

  public listen() {
    try {
      const key = String(process.env.CERTIFICATE_KEY);
      const pem = String(process.env.CERTIFICATE_PEM);

      if (fs.existsSync(key) && fs.existsSync(pem)) {
        const certificate = {
          key: fs.readFileSync(key),
          cert: fs.readFileSync(pem),
        };

        this._server = https.createServer(certificate, this._app);
        this._server.listen(this._port, () => {
          logger.info(`Secure app listening on port ${this._port}`);
        });
      } else {
        this._server = http.createServer(this._app);
        this._server.listen(this._port, () => {
          logger.info(`App listening on port ${this._port}`);
        });
      }
    } catch (error) {
      logger.error(`Failed to start server: ${error}`);
    }
  }
}

export default Server;
