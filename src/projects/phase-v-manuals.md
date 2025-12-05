---
title: Fase V - Manuales
icon: book
star: true
sticky: 10
article: true
dir:
  order: 6
category:
  - Proyectos
tag:
  - Documentación
  - Usuario
  - Técnico
author: José Zúñiga
---

# Fase V: Manuales y Documentación

La entrega del software no está completa sin su documentación. Los manuales son la garantía de que el sistema perdurará en el tiempo, permitiendo a los usuarios operarlo correctamente y a futuros técnicos mantenerlo.

## I. Manual de Usuario

Es la guía dirigida al usuario final. Su objetivo es explicar de forma sencilla y gráfica cómo operar las funcionalidades del sistema.

### 📖 Estructura Recomendada
1. **Introducción:** Breve descripción del sistema y su propósito.
2. **Requerimientos Mínimos:** Qué navegador o equipo necesita el usuario.
3. **Acceso al Sistema:** Pasos para iniciar sesión (Login) y recuperar contraseña.
4. **Mapa de Navegación:** Explicación del menú principal.
5. **Módulos Paso a Paso:**
   - **Maestros:** Cómo registrar, modificar y consultar datos básicos (ej. Clientes, Productos).
   - **Transacciones:** Cómo realizar las operaciones diarias (ej. Facturación, Inscripción).
   - **Reportes:** Cómo generar e imprimir los reportes estadísticos.

::: tip Buenas Prácticas
* **Usa un lenguaje simple:** Evita tecnicismos.
* **Capturas de Pantalla:** "Una imagen vale más que mil palabras". Incluye flechas y recuadros rojos señalando dónde hacer clic.
* **Solución de Problemas:** Incluye una sección de preguntas frecuentes (FAQ) o errores comunes.
:::

## II. Manual de Sistema (Técnico)

Este documento está dirigido al personal de informática o desarrolladores que darán mantenimiento al software en el futuro.

### 🛠️ Contenido Técnico
Debe recopilar la información técnica generada en las fases anteriores:
1. **Ficha Técnica:** Tecnologías usadas (Lenguaje, Framework, Base de Datos).
2. **Arquitectura del Sistema:** Diagrama de paquetes o componentes.
3. **Modelo de Datos:** Diagrama Entidad-Relación y Diccionario de Datos actualizado.
4. **Estructura del Código:** Explicación de la organización de carpetas y archivos principales del proyecto.
5. **Seguridad:** Explicación de cómo se manejan los roles, permisos y encriptación.

## III. Manual de Instalación

Es una guía crítica para desplegar el sistema en un servidor nuevo o reinstalarlo en caso de desastre.

### 🚀 Pasos de Despliegue
Debe ser una "receta de cocina" exacta:
1. **Prerrequisitos de Software:** (Ej. Instalar XAMPP, Node.js v14, Python 3.9).
2. **Configuración de Base de Datos:** Cómo importar el archivo `.sql` inicial.
3. **Configuración de Variables de Entorno:** Archivos `.env` (conexiones a BD, puertos).
4. **Puesta en Marcha:** Comandos para iniciar el servidor (ej. `npm start`, `python manage.py runserver`).

## IV. Documentación Adicional (Solo PST IV)

Para los proyectos de **Trayecto IV (Ingeniería)**, se exige un nivel mayor de formalidad en la gestión de TI. Se deben anexar:

### 🔒 Políticas y Estándares
- **Políticas de Seguridad Informática:** Normas para el manejo de claves, respaldos (backups) y acceso a la sala de servidores.
- **Normas y Procedimientos:** Si la comunidad no cuenta con ellos, se deben proponer manuales administrativos que regulen el uso de la tecnología.

::: warning Sostenibilidad
Un software sin manuales es un software "muerto". La calidad de esta documentación define si el proyecto sobrevivirá cuando los estudiantes ya no estén presentes.
:::