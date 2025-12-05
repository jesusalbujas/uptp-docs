---
title: Fase III - Implantación
icon: server
star: true
sticky: 10
article: true
dir:
  order: 4
category:
  - Proyectos
tag:
  - Pruebas
  - Despliegue
  - Calidad
author: José Zúñiga
---

# Fase III: Implantación, Pruebas y Optimización

Una vez codificado el software, entramos en la etapa de aseguramiento de la calidad y puesta en marcha. Aquí verificamos que el sistema cumpla con los requerimientos y lo instalamos en el entorno real de la comunidad.

## I. Estrategia de Pruebas de Software

Según la metodología, las pruebas deben aplicarse sistemáticamente para garantizar la calidad. Se recomienda seguir estos niveles:

### 🧪 Niveles de Prueba
1. **Pruebas Unitarias:** Se evalúa cada módulo o componente individualmente (generalmente lo hace el programador).
2. **Pruebas de Integración:** Se verifica que los módulos funcionen correctamente al unirse entre sí.
3. **Pruebas del Sistema:** Se valida el funcionamiento total del software como un todo.
4. **Pruebas de Aceptación:** Realizadas por el usuario final con datos reales para dar el "visto bueno".

### 📝 Diseño de Casos de Prueba
Para documentar las pruebas, se deben diseñar **Casos de Prueba** que especifiquen qué se va a probar y qué resultado se espera.

**Estructura recomendada para el reporte:**

| ID | Funcionalidad | Datos de Entrada | Resultado Esperado | Resultado Obtenido | Estatus |
|:--:|---------------|------------------|--------------------|--------------------|:-------:|
| CP-01 | Iniciar Sesión | Usuario: admin<br>Clave: 1234 | Acceso al menú principal | Acceso exitoso | ✅ Éxito |
| CP-02 | Registro Cliente | Cédula vacía | Mensaje de error | Sistema se cerró | ❌ Fallo |

::: info Caja Blanca vs Caja Negra
* **Caja Blanca:** Se examina la lógica interna del código (bucles, condiciones).
* **Caja Negra:** Se evalúa solo la funcionalidad (entradas y salidas) sin mirar el código.
:::

## II. Estrategias de Implantación

Es el proceso de inserción del software en la plataforma tecnológica de la comunidad.

### 🚀 Plan de Despliegue
Se debe realizar una planificación detallada que incluya:

1. **Configuración del Hardware:** Preparación de los equipos y servidores donde funcionará el sistema.
2. **Instalación del Software:** Despliegue de la aplicación, base de datos y librerías necesarias.
3. **Conversión de Datos:** Migración de datos manuales o de sistemas anteriores al nuevo sistema.
4. **Capacitación de Usuarios:** Entrenamiento al personal que operará el sistema.

::: tip Entornos Modernos
Si usas tecnologías como **Docker**, la instalación se simplifica enormemente al garantizar que el software funcione igual en desarrollo y en producción.
:::

## III. Evaluación de la Calidad

Finalmente, se debe evaluar el software implantado utilizando métricas de calidad (como ISO/IEC 9126):

* **Funcionalidad:** ¿Hace lo que se pidió?
* **Usabilidad:** ¿Es fácil de usar y aprender?
* **Fiabilidad:** ¿Es estable o falla con frecuencia?
* **Eficiencia:** ¿Responde rápido y usa bien los recursos?