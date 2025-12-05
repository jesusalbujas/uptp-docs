---
title: Modelado y Diagramación
icon: sitemap
star: true
sticky: 10
article: true
dir:
  order: 1
category:
  - Recursos
---

# Modelado y Diagramación

La fase de modelado y diagramación es el equivalente a los planos de un arquitecto antes de construir un edificio. En el desarrollo de software (y específicamente en el PST), estos diagramas transforman los requisitos escritos (texto) en representaciones gráficas estandarizadas (UML) que los programadores pueden entender y codificar.

Esta sección debe demostrar que entiendes cómo va a funcionar tu sistema por dentro y por fuera.

## 1. Diagramas de Casos de Uso (Comportamiento)

Este diagrama representa el comportamiento del sistema. No le importa el código, ni la base de datos; solo le importa quién usa el sistema y qué puede hacer con él.

### Elementos y Simbología

| Símbolo | Nombre | Descripción |
| :---: | :--- | :--- |
| 👤 | **Actor** | Representa un rol que interactúa con el sistema (Usuario, Administrador, Cliente). **Nota:** Un actor no es una persona específica (Juan), sino un rol. |
| ⭕ | **Caso de Uso** | Es una funcionalidad específica o meta que el actor quiere lograr. Se escribe siempre como **Verbo + Sustantivo** (Ej. Registrar Usuario, Imprimir Factura). |
| ── | **Asociación** | Una línea sólida que conecta al Actor con el Caso de Uso que está ejecutando. |
| ▭ | **Límite del Sistema** | Un recuadro que encierra todos los óvalos (casos de uso). Los actores quedan fuera de este recuadro. |

### Relaciones Complejas (La parte difícil)

Muchos estudiantes confunden `<<include>>` y `<<extend>>`. Aquí la diferencia clave:

- **Inclusión (`<<include>>`) → Obligatorio:**
  - Se usa cuando un caso de uso **siempre** necesita ejecutar a otro para completarse. Es como una subrutina obligatoria.
  - **Ejemplo:** Para realizar el caso de uso "Retirar Dinero" en un cajero, el sistema obligatoriamente debe "Verificar Saldo".
  - **Flecha:** Punteada, apunta hacia el caso incluido.

- **Extensión (`<<extend>>`) → Opcional:**
  - Se usa para comportamientos que ocurren solo bajo ciertas condiciones (errores, opciones extra). **No siempre pasa.**
  - **Ejemplo:** Al hacer "Login", el caso de uso "Mostrar Error de Contraseña" solo se ejecuta si el usuario se equivoca.
  - **Flecha:** Punteada, apunta hacia el caso base (el original).

### Plantilla de Especificación de Caso de Uso

Por cada óvalo en tu diagrama, debes llenar una ficha técnica en el informe. Esta tabla explica el flujo paso a paso:

| Campo | Descripción y Ejemplo |
| :--- | :--- |
| **Identificador** | Código único (Ej. CUS-01). |
| **Nombre** | Título corto (Ej. Gestión de Ventas). |
| **Actores** | Quiénes participan (Ej. Cajero, Sistema de Inventario). |
| **Descripción** | Resumen breve (Ej. Permite registrar la venta de productos y descontar stock). |
| **Pre-condición** | Qué debe cumplirse antes de empezar (Ej. El cajero debe haber iniciado sesión). |
| **Post-condición** | Qué estado tiene el sistema al finalizar (Ej. Se genera factura y se actualiza stock). |
| **Flujo Normal** | **Pasos del éxito:**<br>1. El Cajero escanea producto.<br>2. Sistema muestra precio.<br>3. Cajero confirma venta. |
| **Flujo Alterno** | **Errores o caminos alternativos:**<br>2a. Si el producto no tiene precio, solicitar ingreso manual. |

## 2. Diagramas de Clases (Estructura)

El Diagrama de Clases es el "esqueleto" del código. Es un diagrama estático que muestra los bloques de construcción del software y cómo se conectan. Es fundamental para la Programación Orientada a Objetos (POO).

### Anatomía de una Clase

Se representa con un rectángulo dividido en tres secciones:

1. **Superior (Nombre):** El nombre de la clase (Ej. `Factura`, `Estudiante`).
2. **Medio (Atributos):** Son los datos o variables que tiene la clase.
   - **Visibilidad:** `-` (Privado/Candado), `+` (Público), `#` (Protegido).
   - **Sintaxis:** `visibilidad nombre: tipoDato` (Ej. `- saldo: Double`).
3. **Inferior (Métodos):** Son las acciones o funciones.
   - **Sintaxis:** `+ nombreMetodo(params): retorno` (Ej. `+ calcularTotal(): Double`).

### Tipos de Relaciones entre Clases

- **Asociación (Línea simple):** Conexión básica. "Un Profesor enseña a un Alumno".
- **Agregación (Rombo vacío ◇):** Relación "Todo-Parte" Débil. Si la parte principal desaparece, las partes pequeñas siguen existiendo.
  - *Ejemplo:* Un Computador tiene Mouse. Si botas el computador, el mouse sigue siendo útil en otro lado.
- **Composición (Rombo lleno ◆):** Relación "Todo-Parte" Fuerte. Si la parte principal muere, las partes mueren con ella. "Vida y muerte juntas".
  - *Ejemplo:* Una Factura tiene Detalles. Si eliminas la factura, los detalles no tienen sentido por sí solos y se borran.
- **Herencia / Generalización (Flecha triangular △):** Relación "Es un tipo de".
  - *Ejemplo:* Perro y Gato heredan de la clase Animal. Ambos tienen atributos comunes (edad, peso) pero métodos distintos (ladrar, maullar).

## 3. Modelo Entidad-Relación (E/R) y Diccionario de Datos

Esta sección ya no habla de código (clases), sino de datos persistentes (Base de Datos). Es vital para garantizar que la información no se pierda.

### A. Modelo Entidad-Relación (E/R)

Es un diagrama lógico que muestra las tablas y cómo se cruzan.

- **Entidades:** Tablas (Ej. `t_usuarios`).
- **Llaves:**
  - **PK (Primary Key):** Identificador único (Cédula, ID).
  - **FK (Foreign Key):** Llave foránea, conecta una tabla con otra.
- **Cardinalidad:**
  - **1:1 (Uno a Uno):** Un empleado tiene un solo carnet.
  - **1:N (Uno a Muchos):** Un cliente hace muchos pedidos. (La más común).
  - **N:M (Muchos a Muchos):** Muchos estudiantes ven muchas materias. (Requiere tabla intermedia).

### B. Diccionario de Datos

Es el "glosario técnico" de la base de datos. Debes hacer una tabla por cada entidad del diagrama E/R explicando qué significa cada columna. Esto evita que el programador "adivine" qué guardar.

**Ejemplo de Diccionario (Tabla: `t_producto`):**

| Campo (Columna) | Tipo de Dato | Tamaño | Nulo? | Descripción |
| :--- | :--- | :--- | :--- | :--- |
| **id_producto** | INT (Entero) | 11 | NO | **PK.** Identificador único autoincremental. |
| **codigo_barra** | VARCHAR | 50 | NO | Código escaneable del empaque. |
| **nombre** | VARCHAR | 100 | NO | Nombre comercial del producto. |
| **precio_venta** | DECIMAL | 10,2 | NO | Precio final al público (2 decimales). |
| **fk_proveedor** | INT | 11 | NO | **FK.** Relación con la tabla Proveedores. |
| **stock** | INT | 5 | SI | Cantidad disponible (puede ser nulo si es servicio). |
