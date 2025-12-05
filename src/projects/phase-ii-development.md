---
title: Fase II - Desarrollo
icon: code
star: true
sticky: 10
article: true
dir:
  order: 3
category:
  - Proyectos
tag:
  - Requerimientos
  - Arquitectura
  - Base de Datos
author: José Zúñiga
---

# Fase II: Requerimientos, Diseño y Desarrollo

En esta fase transformamos las necesidades detectadas en una solución técnica concreta. Se define **qué hará el sistema** (Requerimientos) y **cómo lo hará** (Arquitectura y Diseño), siguiendo la metodología **MERINDE**.

## I. Ingeniería de Requisitos

Es el proceso de descubrir, analizar, documentar y verificar los servicios y restricciones del sistema.

### 📋 Lista de Requerimientos
Se deben clasificar en dos tipos fundamentales:

1. **Requerimientos Funcionales (RF):** Describen lo que el sistema *debe hacer* (funciones, comportamientos).
   - *Ejemplo:* "El sistema debe permitir registrar nuevos usuarios con roles específicos."
2. **Requerimientos No Funcionales (RNF):** Describen *cómo* debe comportarse el sistema (calidad, rendimiento, seguridad).
   - *Ejemplo:* "El sistema debe responder a las consultas en menos de 2 segundos."

### 🧩 Diagrama de Casos de Uso del Sistema (UML)
Representa la interacción entre los **Actores** (usuarios) y las funcionalidades del sistema (Casos de Uso).
- Cada caso de uso debe tener su **Plantilla de Especificación** detallada (Precondición, Flujo Normal, Flujo Alterno, Postcondición).

::: tip Consejo de Buenas Prácticas
Utiliza la estructura de **"Transacciones y Reportes"**. Las transacciones son los eventos diarios (ej. ventas) y los reportes permiten la toma de decisiones.
:::

## II. Arquitectura y Diseño del Software

Aquí se define la estructura técnica de la solución.

### 📐 Modelos de Diseño
Utilizamos diagramas UML para representar la estructura lógica del código.
- **Diagrama de Clases:** Muestra la estructura estática (Clases, Atributos, Métodos y Relaciones).
- **Diagrama de Objetos:** Representa una instancia de las clases en un momento determinado.

### 🗄️ Modelo de Datos
Es el núcleo de la aplicación. Se debe presentar en dos niveles:
1. **Modelo Entidad-Relación (MER):** Diseño conceptual de las entidades y sus relaciones.
2. **Modelo Físico / Diccionario de Datos:** Estructura exacta de las tablas en la base de datos (Tipos de datos, Claves primarias/foráneas).

::: info Arquitectura de Datos
Como sugiere la guía esencial, separa tus tablas en:
- **Tablas Maestras:** Datos estáticos (ej. Productos, Clientes).
- **Tablas Transaccionales:** Datos dinámicos (ej. Facturas, Movimientos).
:::

### 🖥️ Interfaz de Usuario (UI)
Diseño de la experiencia visual.
- **Mapa de Navegación:** Árbol jerárquico que muestra cómo el usuario se mueve por los menús.
- **Diseño de Pantallas (Wireframes):** Bocetos de los formularios y vistas principales.

### 🏗️ Infraestructura
- **Diagrama de Componentes:** Muestra cómo se organizan los módulos del software.
- **Diagrama de Despliegue:** Muestra la relación entre el hardware (nodos) y el software (artefactos).

## III. Stack Tecnológico

Definición de las herramientas a utilizar (basado en Software Libre):

- **Lenguaje:** (Ej. Python, JavaScript/Node.js, PHP).
- **Framework:** (Ej. React, Vue, Django, Laravel).
- **Base de Datos:** (Ej. PostgreSQL, MySQL).
- **Control de Versiones:** Git (GitHub/GitLab).

::: warning Control de Versiones
El uso de **Git** es indispensable para manejar cambios, colaborar en equipo y prevenir conflictos en el código.
:::