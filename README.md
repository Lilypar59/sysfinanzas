# Atctividades Contenedores
## Docker separados Actividad 1

### Crear red

docker network create finnet

- comprobasr
  docker network ls

- Borrar
  docker network rm finnet


### 1 -Base de datos

docker build -t fin-datos ./datos

docker run -d --name db -e POSTGRES_USER=finuser -e POSTGRES_PASSWORD=finpass -e POSTGRES_DB=finsecure -p 5432:5432 fin-datos


### 2 - Backend

docker build -t fin-backend ./backend
--sysfinanzas_finnet
docker run -d --name backend --network sysfinanzas_finnet -p 8000:8000 fin-backend


### 3 - frontend

#### si se ejecuta en powershell

    setx DOCKER_BUILDKIT 0

    - o

    $env:DOCKER_BUILDKIT=0

    - o
    - Get-ChildItem -Recurse .\frontend | ForEach-Object { icacls $_.FullName /reset }

- construir

docker build -t fin-frontend ./frontend

docker run -d --name frontend -p 8081:8081 fin-frontend

### 4 - website

docker build -t fin-site ./sitioweb

docker run -d --name site -p 8080:8080 fin-site

## Docker compose actividad 2

Puertos consistentes

site → 8080

frontend → 8081

backend → 8000

db → 5432

Red finnet


### Cómo ejecutar todo

docker compose down -v
docker compose build --no-cache
docker compose up -d

----  pruebas anteriores por cada modulo

docker compose down
docker compose build --no-cache backend
docker compose up backend

--
docker compose down -v
docker compose build --no-cache db
docker compose up db

--
--- cambiar de node
nvm use 20.18.3
nvm list
