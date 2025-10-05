# ./datos/Dockerfile
FROM postgres:16-alpine

# Variables de entorno (puedes sobrescribirlas con .env)
ENV POSTGRES_USER=finuser
ENV POSTGRES_PASSWORD=finpass
ENV POSTGRES_DB=finsecure

# Copiar los scripts de inicialización
COPY ./init /docker-entrypoint-initdb.d/

EXPOSE 5432
