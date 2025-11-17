---
title: Build
icon: gears
star: true
sticky: 10
dir:
  order: 1
category:
  - Cookbook
  - Tutorial
  - Get Started
  - Install
---

When projects are completed, you can build your application only run one command

::: code-tabs#shell

@tab npm

```bash

# Install Dependency
npm install

# Development
npm run dev

# Builds
npm run build
```

@tab yarn

```bash

# Install Dependency
yarm

# Development
yarm run dev

# Builds
yarm run build
```
:::

After the build package is successful, the dist folder will be generated in the root directory, which is to build a packaged file, usually static files such as **.js, .css, index.html, etc .**