# Plantilla API REST con Express y TypeScript
El código es el resultado de la serie de posts “Creación de una API REST con Express y TypeScript” publicados en [Analytics Lane](https://www.analyticslane.com/) entre octure y diciembre del 2022. Una serie en la que se ha explicado cómo crear un API REST usando para ello Node y Express con TypeScript.

Se han publicado 10 entregas de la serie en las que se explicó todos los pasos necesarios, estructura del proyecto, configuración de TypeORM, creación de rutas, logs con Winston, autenticación de usuarios y puesta en producción. Las diez entregas de la serie son:

1. [Creación de una API REST con Express y TypeScript](https://www.analyticslane.com/2022/10/12/creacion-de-una-api-rest-con-express-y-typescript/)
2. [Organizar el código del proyecto](https://www.analyticslane.com/2022/10/19/organizar-el-codigo-del-proyecto-2a-parte-de-creacion-de-una-api-rest-con-express-y-typescript/)
3. [Configurar TypeORM para acceder a la base de datos](https://www.analyticslane.com/2022/10/26/configurar-typeorm-para-acceder-a-la-base-de-datos-3a-parte-de-creacion-de-una-api-rest-con-express-y-typescript/)
4. [Creación de rutas para consultar y agregar los registros](https://www.analyticslane.com/2022/11/02/creacion-de-rutas-para-consultar-y-agregar-los-registros-4a-parte-de-creacion-de-una-api-rest-con-express-y-typescript/)
5. [Creación de rutas para modificar y borrar los registros](https://www.analyticslane.com/2022/11/09/creacion-de-rutas-para-modificar-y-borrar-los-registros-5a-parte-de-creacion-de-una-api-rest-con-express-y-typescript/)
6. [Agregando logs al API con Winston](https://www.analyticslane.com/2022/11/16/agregando-logs-al-api-con-winston-6a-parte-de-creacion-de-una-api-rest-con-express-y-typescript/)
7. [Requerir autenticación mediante JWT](https://www.analyticslane.com/2022/11/23/requerir-autenticacion-mediante-jwt-7a-parte-de-creacion-de-una-api-rest-con-express-y-typescript/)
8. [Registro de usuarios](https://www.analyticslane.com/2022/11/30/registro-de-usuarios-8a-parte-de-creacion-de-una-api-rest-con-express-y-typescript/)
9. [Incluir un certificado en Express para servir el API mediante HTTPS](https://www.analyticslane.com/2022/12/07/incluir-un-certificado-en-express-para-servir-el-api-mediante-https-9a-parte-de-creacion-de-una-api-rest-con-express-y-typescript/)
10. [Ejecutar la aplicación en producción con PM2](https://www.analyticslane.com/2022/12/14/ejecutar-la-aplicacion-en-produccion-con-pm2-10a-parte-de-creacion-de-una-api-rest-con-express-y-typescript/)

## Descargo de responsabilidad
Copyright (C) 2022 Daniel Rodríguez Pérez

Este programa es software libre: usted puede redistribuirlo y/o modificarlo conforme a los términos de la Licencia Pública General de GNU publicada por la Fundación para el Software Libre, ya sea la versión 3 de esta Licencia o (a su elección) cualquier versión posterior.

Este programa se distribuye con el deseo de que le resulte útil, pero SIN GARANTÍAS DE NINGÚN TIPO; ni siquiera con las garantías implícitas de COMERCIABILIDAD o APTITUD PARA UN PROPÓSITO DETERMINADO. Para más información,consulte la Licencia Pública General de GNU.

Junto con este programa, se debería incluir una copia de la Licencia Pública General de GNU. De no ser así, ingrese en <http://www.gnu.org/licenses/>.

## Disclaimer
This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.