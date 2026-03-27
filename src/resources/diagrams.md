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

> [!TIP]
> **¿Quieres dominar el modelado de requisitos?**
> Para aprender a identificar correctamente los límites del sistema y evitar errores comunes con las relaciones `<<include>>` y `<<extend>>`, te invitamos a consultar el [Tutorial de Diagramas de Casos de Uso de Creately](https://creately.com/blog/es/diagramas/tutorial-diagrama-caso-de-uso/).

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

## 2. Diagramas de Actividad (Flujo de Procesos)

El **Diagrama de Actividad** es esencialmente un diagrama de flujo avanzado bajo el estándar UML. Se utiliza para modelar el aspecto dinámico del sistema, detallando los pasos secuenciales de un proceso de negocio o un algoritmo, desde un punto de inicio hasta su conclusión.

Mientras que el diagrama de casos de uso nos dice *qué* hace el sistema, el de actividad nos explica **cómo** se ejecuta ese proceso internamente paso a paso.



### Elementos y Simbología
| Símbolo | Nombre | Descripción |
| :---: | :--- | :--- |
| **●** | **Inicio** | El punto de partida que dispara el flujo de trabajo. |
| **▭** | **Actividad** | Representa una acción o tarea específica (Ej. "Validar Token", "Registrar Horas"). |
| **⬥** | **Decisión** | Un punto donde el flujo se divide según una condición lógica (Verdadero/Falso). |
| **▬▬** | **Sincronización** | Barras de *Fork* (dividir) o *Join* (unir) para tareas que ocurren en paralelo. |
| **◉** | **Final** | Indica el cierre exitoso del proceso o flujo. |

### Lógica de "Calles" (Swimlanes)
Para sistemas que integran múltiples servicios (como bots, APIs y bases de datos), lo ideal es usar **calles** para definir responsabilidades:

1. **Carril de Interfaz:** Acciones realizadas por el usuario o la plataforma de entrada (Ej. Discord o Web).
2. **Carril de Lógica (Backend):** Procesamiento de datos, validaciones de seguridad y cálculos.
3. **Carril de Almacenamiento:** Consultas y escrituras finales en el servidor de datos.

### Ejemplo de Aplicación Lógica
Consideremos un flujo de **Procesamiento de Requerimientos**:
* El flujo inicia cuando se detecta una nueva entrada de datos.
* Se realiza una **Decisión**: ¿El formato es correcto?
    * **No:** Se genera un log de error y el flujo termina.
    * **Sí:** El sistema procede a procesar la información y, mediante una **Sincronización (Fork)**, actualiza el estatus en tiempo real y registra la persistencia en la base de datos simultáneamente.

> [!TIP]
> **Lectura recomendada:**
> Para aprender a modelar decisiones complejas y flujos paralelos correctamente, visita el [Tutorial del Diagrama de Actividad de Creately](https://creately.com/blog/es/diagramas/tutorial-del-diagrama-de-actividad/).

---

## 3. Diagramas de Clases (Estructura)

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

> [!TIP]
> **¿Deseas perfeccionar tu diseño orientado a objetos?**
> Para entender mejor cómo estructurar las relaciones de herencia, agregación y composición en tus sistemas, te recomendamos explorar el [Tutorial de Diagrama de Clases de Creately](https://creately.com/blog/es/diagramas/tutorial-de-diagrama-de-clases/).

## 4. Modelo Entidad-Relación (E/R) y Diccionario de Datos

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

> [!TIP]
> **¿Quieres profundizar en el diseño de Bases de Datos?**
> Para aprender a identificar correctamente las relaciones entre tablas y ver ejemplos de diagramas E/R aplicados a procesos de negocio reales, consulta el [Tutorial del Diagrama Entidad-Relación de Creately](https://creately.com/blog/es/negocios/tutorial-del-diagrama-de-er/).

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

## 5. Diagramas de Componentes (Arquitectura Lógica)
El **Diagrama de Componentes** describe cómo se divide el sistema en módulos físicos y las dependencias entre ellos. A diferencia del diagrama de clases, que muestra el detalle del código, este diagrama ofrece una visión de "alto nivel" sobre cómo interactúan las piezas de software (librerías, ejecutables, servicios).

Es fundamental para garantizar que el sistema sea modular, mantenible y escalable.

### Elementos y Simbología
| Símbolo | Nombre | Descripción |
| :--- | :--- | :--- |
| **🧩 Componente** | Componente | Una unidad modular del sistema (Ej. Módulo de Seguridad, API de Pagos, Motor de Reportes). Se dibuja como un rectángulo con dos pestañas pequeñas a la izquierda. |
| **🔌 Interfaz** | Interfaz (Provider) | Representa el servicio que un componente ofrece. Se dibuja con un círculo (piruleta/lollipop). |
| **🕳️ Requerimiento** | Interfaz Requerida | Representa que un componente necesita un servicio externo para funcionar. Se dibuja como un semicírculo (socket). |
| **-- - >** | Dependencia | Flecha punteada que indica que un componente depende de otro para su ejecución. |

### ¿Para qué sirve este diagrama?
1. **Encapsulamiento:** Permite ver el sistema como una colección de "cajas negras" que se comunican entre sí.
2. **Reutilización:** Identifica qué módulos pueden ser usados en otros proyectos.
3. **Organización:** Ayuda a los desarrolladores a entender qué librerías o APIs externas (como Google Maps o una pasarela de pago) deben integrarse.

### Relación entre Componentes (Ensamblaje)
El concepto más importante aquí es el **Ensamblaje de Interfaces**. Cuando un componente ofrece un servicio (Círculo) y otro lo necesita (Semicírculo), ambos encajan. 

* **Ejemplo:** Un componente de "Gestión de Pedidos" ofrece una interfaz para guardar datos, y el componente de "Base de Datos" la recibe para procesarla.

> **Diferencia Técnica:** > Mientras que el **Diagrama de Clases** muestra cómo se construye un objeto, el **Diagrama de Componentes** muestra cómo se agrupan esas clases en archivos o módulos funcionales que pueden ser compilados y ejecutados.

> [!TIP]
> **¿Necesitas profundizar?**
> Para ver ejemplos detallados y casos de uso avanzados, consulta la [Guía completa de Diagramas de Componentes en Creately](https://creately.com/blog/es/diagramas/tutorial-de-diagrama-de-componentes/).

---

## 6. Diagramas de Despliegue (Arquitectura Física)
El **Diagrama de Despliegue** representa la arquitectura física del sistema. Mientras que el diagrama de clases se enfoca en el código, este diagrama describe cómo se distribuyen los componentes de software en el hardware y cómo se comunican entre sí. 

Es la representación final de dónde "vivirá" tu aplicación una vez instalada.

### Elementos y Simbología
| Símbolo | Nombre | Descripción |
| :--- | :--- | :--- |
| **📦 Nodo** | Nodo | Representa un recurso de hardware (Servidor, PC, Smartphone) o un entorno de ejecución (Docker, Servidor Apache). Se dibuja como un cubo 3D. |
| **📄 Artefacto** | Artefacto | Es el archivo físico resultante del desarrollo (Ej. `api.jar`, `index.php`, `database.sql`). Se ubica dentro de un nodo. |
| **── Asociación** | Camino de Comunicación | Línea que conecta dos nodos. Representa la ruta de red por donde viaja la información (Ej. Ethernet, Wi-Fi). |

### Componentes de la Arquitectura
Para documentar correctamente el despliegue de tu PST, debes definir:

1. **Nodos de Dispositivo:** Máquinas físicas con procesador y memoria.
2. **Entornos de Ejecución:** Software que sirve de plataforma para el código (Ej. Navegador, Máquina Virtual Java, Servidor de Aplicaciones).
3. **Protocolos:** Se escriben sobre las líneas de asociación para indicar cómo se comunican los nodos (Ej. HTTP, TCP/IP, JDBC).

### Ejemplo de Configuración Común
En un entorno de desarrollo web estándar, el despliegue suele representarse en tres niveles:

* **Cliente:** El equipo del usuario final que utiliza un **Navegador Web** (Chrome, Firefox).
* **Servidor de Aplicaciones:** Donde se aloja el código fuente y el motor del lenguaje (Ej. Servidor Apache con PHP o Node.js).
* **Servidor de Datos:** El equipo o contenedor que aloja el motor de base de datos (Ej. MySQL, PostgreSQL).

> **Dato Clave:** > La diferencia entre un Diagrama de Componentes y uno de Despliegue es que el de **Componentes** describe las partes del software (lógico), mientras que el de **Despliegue** describe dónde se instalan esas partes (físico).

> [!TIP]
> **Lectura recomendada:**
> Si quieres ver cómo diseñar arquitecturas de red más complejas, revisa el [Tutorial de Diagramas de Despliegue de Creately](https://creately.com/blog/es/diagramas/tutorial-de-diagrama-de-despliegue/).

---