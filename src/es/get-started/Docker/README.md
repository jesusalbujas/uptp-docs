---
title: Docker
icon: clone
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
## <i class="fa-brands fa-docker" style="color: #74C0FC;" /> Ejecutar contenedor docker

### Requisitos mínimos de Docker

Para utilizar esta imagen Docker debe tener su motor Docker número de versión mayor o igual a 3.0.
Crear imagen Docker (solo para desarrollo):


```bash
docker build -t solopcloud/adempiere-vue:dev -f ./Dockerfile .
```

### Descargar imagen docker:

```bash
docker pull solopcloud/adempiere-vue
```

### Ejecutar contenedor contenedor:

```bash
docker run -it \
	--name adempiere-vue \
	-p 80:80 \
	-e API_URL="http://localhost:9527/api/" \
	-e TZ="America/Caracas" \
	solopcloud/adempiere-vue
```

### O ejecute fácilmente el contenedor utilizando docker-compose con el siguiente comando:

```bash
docker-compose up
```