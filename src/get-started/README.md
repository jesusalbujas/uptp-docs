---
title: University Project using ADempiere
icon: rocket
star: true
sticky: 10
dir:
  order: 1
author: Jesús Hernández
category:
  - Cookbook
  - Tutorial
  - Get Started
---

This is an implementation project of the ADempiere system for Fixed Asset Control. 
Our work team has a repository on GitHub, with which the system download and installation process is carried out. 
::: tip
Requirements:
* Linux
* Docker
* Docker Compose
* Git
* Visual Studio Code (optional).
:::
## Configuring Work Environment

This app downloads the required images, runs the configured containers, and restores the database to your local machine by simply pulling up Docker Compose!

It consists of a Docker Compose project that defines all the services required to run ADempiere, ZK, Vue, and other services.

When run, the Docker Compose project eventually runs the services defined in the Docker Compose files as Docker containers. Running Docker containers constitute the application. Docker Compose starts different services.

### Setting up domain

This service simply exposes port `80`. You must configure it to use it as `api.adempiere.io` (for Linux just add this domain to `/etc/hosts`).

Example:

```bash
sudo nano /etc/hosts

127.0.0.1 localhost
127.0.1.1 adempiere
<Your-IP-Here> api.adempiere.io
```

**Raise Docker Compose**

```bash
cd docker-compose

docker compose up -d
```

**Access to the database**

Connect to the database through port `5436` with a database manager, for example, pgAdmin.


### Benefits of the application:
* In its simplest form, it can be used as a demo of the latest version of ADempiere, or any version.
* Does not require a major installation to get up and running.
* Can run on different hosts just by changing
  * the IP address by that of the host
* Fully configurable - any value can be changed for the entire application in the single .env configuration file.
* Upgrades or replacements of individual containers or images can be done easily, streamlining deployments and testing.
* Ideal for testing situations due to its ease of setup and execution.
* Deep knowledge of ADempiere installation, application server installation, Docker, images or Postgres is not required.
* New services can be added easily.