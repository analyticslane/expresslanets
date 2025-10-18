import swaggerJsdoc from 'swagger-jsdoc';

import { version } from '../../package.json';

const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de ejemplo con Express + TypeScript',
      version: version,
      description: 'Documentación generada automáticamente con Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  // Aquí indicamos dónde buscar las anotaciones
  apis: ['./src/routes/**/*.ts'],
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);
