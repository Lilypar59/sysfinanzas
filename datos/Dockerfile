# # ./datos/Dockerfile
# FROM postgres:16-alpine

# Imagen base oficial de PostgreSQL
FROM postgres:16

# Variables de entorno por defecto (pueden sobrescribirse desde docker-compose)
ENV POSTGRES_USER=finuser
ENV POSTGRES_PASSWORD=finpass
ENV POSTGRES_DB=finsecure

# Copiar scripts SQL de inicialización
COPY ./init /docker-entrypoint-initdb.d

# Exponer el puerto estándar de PostgreSQL
EXPOSE 5432
