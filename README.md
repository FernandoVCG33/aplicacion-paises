# 🌍 Country App - Angular

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![REST API](https://img.shields.io/badge/REST_API-005571?style=for-the-badge&logo=json&logoColor=white)

Aplicación web desarrollada en Angular que permite la búsqueda y visualización detallada de información de países. El sistema ofrece múltiples filtros de búsqueda (capital, nombre, región) consumiendo datos en tiempo real de una API externa.

## 🎯 Objetivo del Proyecto

El propósito principal es demostrar el dominio de conceptos clave en Angular, tales como:

* **Consumo de APIs:** Implementación de `HttpClient` para peticiones HTTP.
* **Manejo de Rutas:** Uso de Lazy Loading y rutas hijas (`country.routes.ts`).
* **Componentes Reutilizables:** Creación de inputs de búsqueda y tablas compartidas.
* **Tipado Estricto:** Uso de interfaces y mappers para controlar la data externa.

## 📂 Estructura de Directorios

El proyecto sigue una arquitectura modular, separando el módulo de países (`country`) de los componentes compartidos (`shared`):

```text
src/app/
├── country/                  # Módulo Principal
│   ├── components/           # Componentes visuales reutilizables
│   │   ├── country-list/
│   │   ├── search-input/
│   │   └── top-menu/
│   ├── interfaces/           # Modelos de datos (Interfaces)
│   ├── layout/               # Layout específico del módulo
│   ├── mapper/               # Transformación de datos API
│   ├── pages/                # Vistas principales
│   │   ├── by-capital-page/  # Búsqueda por capital
│   │   ├── by-country-page/  # Búsqueda por país
│   │   ├── by-region-page/   # Búsqueda por región
│   │   └── country-page/     # Detalle de un país específico
│   ├── services/             # Lógica de petición de datos
│   └── country.routes.ts     # Definición de rutas hijas
├── shared/                   # Módulo Compartido
│   ├── components/
│   │   ├── footer/
│   │   └── not-found/        # Página 404
│   └── pages/
│       └── home/
└── app.module.ts
