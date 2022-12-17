import 'dotenv/config';
import datasource from './datasource';
import logger from './logger';
import middleWares from './middlewares';
import router from './routes';
import Server from './server';

// Configuración del puerto
const PORT: number = Number(process.env.PORT) || 3000;

// Conexión a la base de datos
datasource
  .initialize()
  .then(async () => {
    // Creación del servicio
    const server = new Server({
      port: PORT,
      middleWares: middleWares,
      routes: [router],
    });

    server.listen();
  })
  .catch((err) => {
    logger.error('Error during Data Source initialization:', err);
  });
