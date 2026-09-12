import 'dotenv/config';

import datasource from './config/datasource.js';
import logger from './config/logger.js';
import middleWares from './middlewares/index.js';
import router from './routes/index.js';
import Server from './server.js';

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
