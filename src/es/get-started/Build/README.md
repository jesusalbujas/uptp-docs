---
title: Modo Producción
icon: gears
star: true
sticky: 10
dir:
  order: 1
category:
  - Cookbook
  - Tutorial
  - Get Started
  - Build
---

Una vez finalizados los proyectos, puedes compilar tu aplicación con sólo ejecutar un comando

::: code-tabs#shell

@tab npm

```bash

# Instalar Dependencia (npm install --frozen-lockfile)
npm install


# Construye
npm run build
```

@tab yarn

```bash

# Instalar Dependencia (yarm install --frozen-lockfile)
yarm

# Construye
yarm run build
```
:::

Después de que el paquete de construcción tiene éxito, la carpeta dist se generará en el directorio raíz, que es construir un archivo empaquetado, por lo general los archivos estáticos como **.js, .css, index.html, etc .**