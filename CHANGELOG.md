# Changelog

Todas las modificaciones notables de este proyecto se documentarán en este archivo.
El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/).

## [2.0.0] - 2026-09-12

### Cambiado

* Migración completa del proyecto a **ECMAScript Modules (ESM)** (`"type": "module"`, `module`/`moduleResolution: NodeNext` en `tsconfig.json`), sustituyendo CommonJS.
* Actualización de **TypeORM** a la rama 1.x (cambio de versión mayor, incluye ajustes en el driver de base de datos).
* Sustitución del driver `sqlite3` por `better-sqlite3` en el `DataSource`, requerido por TypeORM 1.x tras eliminar el driver `sqlite`.
* Nuevo flujo de desarrollo con `tsx watch` + `tsc --noEmit --watch` (orquestado con `concurrently`), en sustitución de `nodemon` + `ts-node`.
* Tipado explícito en las columnas de las entidades (`@Column({ type: 'varchar' })`) para no depender de `emitDecoratorMetadata`, no soportado por transpiladores basados en esbuild.

### Añadido

* Suite de pruebas con **Vitest**: scripts `npm run test`, `npm run test:watch` y `npm run coverage` (con `@vitest/coverage-v8`).
* Primer test de ejemplo sobre la entidad `Logins` (hash y validación de contraseña).
* Script `npm run typecheck` para comprobar tipos sin generar salida.

### Actualizado

* Dependencias del proyecto a sus últimas versiones estables: ESLint 10, TypeScript, Express, Helmet, JSON Web Token, Morgan, Prettier, Winston, entre otras.

---

## [1.1.0] - 2025-10-18

### Añadido

* Integración de **Swagger (OpenAPI 3.0)** para documentar automáticamente la API.
* Archivo de configuración `src/config/swagger.ts`.
* Interfaz interactiva disponible en `/api-docs` y esquema JSON en `/api-docs.json`.
* Ejemplo de documentación de endpoints con anotaciones **JSDoc**.
* Configuración para desactivar la documentación en entornos de producción.

### Referencias

* [Documentar tu API de Express con TypeScript usando OpenAPI (Swagger)](https://www.analyticslane.com/2025/10/21/documentar-tu-api-de-express-con-typescript-usando-openapi-swagger/)

---

## [1.0.2] - 2025-10-05

### Actualizado

* Actualización de dependencias del proyecto a versiones más recientes.
* Ajustes menores en la configuración para compatibilidad con Node.js y TypeScript modernos.

---

## [1.0.1] - 2024-03-07

### Actualizado

* Actualización general de dependencias.
* Correcciones menores en scripts de desarrollo y configuración de compilación.

---

## [1.0.0] - 2022-10-12

### Añadido

* Versión inicial del proyecto **Express + TypeScript**.
* Configuración base del servidor Express, controladores y rutas de ejemplo.
* Estructura de proyecto orientada a plantillas para futuras APIs.