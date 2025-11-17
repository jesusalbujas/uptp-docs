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
  - Install
---
## <i class="fa-brands fa-docker" style="color: #74C0FC;" /> Run docker container
### Minimal Docker Requirements

To use this Docker image you must have your Docker engine release number greater than or equal to 3.0.

Build docker image (for development only):


```bash
docker build -t solopcloud/adempiere-vue:dev -f ./Dockerfile .
```

### Download docker image:

```bash
docker pull solopcloud/adempiere-vue
```

### Run container container:

```bash
docker run -it \
	--name adempiere-vue \
	-p 80:80 \
	-e API_URL="http://localhost:9527/api/" \
	-e TZ="America/Caracas" \
	solopcloud/adempiere-vue
```

### Or easy run container using docker-compose with follow command:

```bash
docker-compose up
```