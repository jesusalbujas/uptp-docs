---
title: Develop
icon: screwdriver-wrench
star: true
sticky: 10
dir:
  order: 1
category:
  - Cookbook
  - Tutorial
  - Get Started
  - Docker
---

## 🛠 Getting Started

<!-- # Enable https to install packages
git config --global url."https://".insteadOf git://

# clone the project
git clone -b feature/legacy-support https://github.com/solop-develop/frontend-core.git -->

::: code-tabs#shell

@tab npm

```bash


# enter the project directory
cd frontend-core

# install dependency 
npm ci

# run project as develop
npm run dev
```

@tab yarn

```bash
# enter the project directory
cd frontend-core

# install dependency
yarn ci

# Development
yarm run dev

```
:::

This will automatically open [localhost:9527](http://localhost:9527)