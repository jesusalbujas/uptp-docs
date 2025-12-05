---
title: Plantillas y Formatos
icon: file-lines
star: true
sticky: 10
article: true
dir:
  order: 2
category:
  - Recursos
---

# Plantillas y Formatos Estandarizados

Para garantizar la uniformidad técnica en los informes del Proyecto Socio Tecnológico (PST), se deben utilizar las siguientes tablas o fichas técnicas. Estas plantillas están diseñadas para cumplir con los estándares de documentación de Ingeniería de Software.

## 🔍 Conceptos Clave: Antes de empezar

Es vital entender la diferencia entre estos tres elementos para llenar las plantillas correctamente.

### 1. Caso de Uso (La Historia)
Describe cómo interactúa un usuario con el sistema para lograr una meta. Se enfoca en el comportamiento observable, no en el código.
- **Pregunta clave:** ¿Qué hace el usuario con el sistema?
- **Ejemplo:** Un cliente "Realiza una Compra" en la tienda online. (Implica seleccionar, pagar y confirmar).

### 2. Requerimiento Funcional (La Función)
Es una declaración técnica de lo que el sistema debe hacer. Son las funciones específicas que el software debe ejecutar.
- **Pregunta clave:** ¿Qué función debe programarse?
- **Ejemplo:** El sistema debe calcular el IVA (16%) automáticamente al generar la factura.

### 3. Requerimiento No Funcional (La Calidad)
Define cómo debe comportarse el sistema. Se refiere a atributos de calidad como velocidad, seguridad, diseño o disponibilidad.
- **Pregunta clave:** ¿Qué tan rápido/seguro/bonito debe ser?
- **Ejemplo:** El sistema debe procesar el pago en menos de 3 segundos. (Rendimiento).

---

## 1. Plantilla de Requerimientos Funcionales (RF)

Esta ficha se utiliza en la Fase II para detallar cada una de las funciones que el sistema debe cumplir. Se debe llenar una ficha por cada Requerimiento Funcional identificado en la lista general.

### Estructura de la Ficha

| Campo | Descripción |
| :--- | :--- |
| **ID del Requerimiento** | Código único (Ej. RF-01, RF-02). |
| **Nombre** | Título corto y descriptivo de la función. |
| **Descripción** | Explicación detallada de qué debe hacer el sistema (sin entrar en detalles técnicos de cómo lo hace). |
| **Prioridad** | Importancia para el negocio (Alta, Media, Baja). |


### Ejemplo de Llenado

| **ID del Requerimiento** | RF-01 |
| :--- | :--- |
| **Nombre** | Autenticación de Usuarios |
| **Descripción** | El sistema debe permitir el acceso únicamente a usuarios registrados mediante validación de credenciales (usuario y contraseña). |
| **Prioridad** | 🔘 Alta   ⚪ Media   ⚪ Baja |

---

## 2. Plantilla de Especificación de Casos de Uso (CUS)

Esta plantilla es vital para describir el comportamiento detallado de cada interacción. Se debe realizar una ficha por cada óvalo presente en el Diagrama de Casos de Uso.

### Estructura de la Ficha

| Campo | Descripción |
| :--- | :--- |
| **Identificador** | Código del Caso de Uso (Ej. CUS-01). |
| **Nombre** | Acción en infinitivo (Ej. Registrar Cliente). |
| **Actor(es)** | Quién ejecuta la acción. |
| **Propósito/Descripción** | Breve resumen del objetivo. |
| **Precondición** | Qué debe cumplirse antes de iniciar (Ej. Estar logueado). |
| **Postcondición** | Estado del sistema al finalizar con éxito. |

**Curso Normal de Eventos**

| Acción del Actor | Respuesta del Sistema |
| :--- | :--- |
| 1. [Paso 1] | 2. [Respuesta 1] |
| 3. [Paso 2] | 4. [Respuesta 2] |

**Cursos Alternos (Errores)**

| Acción del Actor | Respuesta del Sistema |
| :--- | :--- |
| 1a. [Condición de error] | 2a. [Mensaje de error] |

### Ejemplo de Llenado

| **Identificador** | CUS-03 |
| :--- | :--- |
| **Caso de Uso** | Asignación de Activo TI |
| **Actor(es)** | Soporte Técnico |
| **Propósito** | Asignar un equipo de computación a un empleado específico. |
| **Precondición** | El activo debe estar registrado y con estatus "Disponible". |
| **Postcondición** | El activo cambia a estatus "Asignado" y se vincula al empleado. |

**Curso Normal de Eventos**

| Acción del Actor | Respuesta del Sistema |
| :--- | :--- |
| 1. Selecciona "Asignar Activo" en el menú. | 2. Muestra el formulario de búsqueda de activos. |
| 3. Ingresa el serial del equipo y selecciona al empleado. | 4. Valida la disponibilidad y guarda el registro.<br>5. Muestra mensaje "Asignación Exitosa". |

**Cursos Alternos**

| Acción del Actor | Respuesta del Sistema |
| :--- | :--- |
| 3a. El activo seleccionado ya está asignado. | 4a. Muestra error: "El activo no está disponible". |

---

## 3. Plantilla de Requerimientos No Funcionales (RNF)

Define las características de calidad, rendimiento y restricciones técnicas.

### Ejemplo de Llenado

| **Código** | **Tipo** | **Descripción** |
| :--- | :--- | :--- |
| RNF-01 | Interfaz | La interfaz debe ser responsiva (adaptable a móviles). |
| RNF-02 | Seguridad | Las contraseñas deben estar encriptadas (Hash). |
| RNF-03 | Rendimiento | El tiempo de respuesta no debe superar los 3 segundos. |
