# Changelog

Todas las modificaciones notables de este proyecto se documentarán en este archivo.
El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/).

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