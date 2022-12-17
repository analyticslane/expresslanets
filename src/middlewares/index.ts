import cors from 'cors';
import { json } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import logger from '../logger';

const middleWares = [
  cors(),
  helmet(),
  json(),
  morgan('tiny', { stream: { write: (m) => logger.http(m.split('\n')[0]) } }),
];

export default middleWares;
