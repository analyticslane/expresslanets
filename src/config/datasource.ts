import * as path from 'path';
import { fileURLToPath } from 'url';
import { DataSource } from 'typeorm';

const currentFile = fileURLToPath(import.meta.url);

let entities = ['dist/entities/**/*.js'];
if (path.extname(currentFile) === '.ts') {
  entities = ['src/entities/**/!(*.test).ts'];
}

const datasource = new DataSource({
  type: 'better-sqlite3',
  database: 'database.db',
  entities,
  synchronize: true,
});

export default datasource;
