# ./frontend/Dockerfile
# ==========================
#  Etapa 1: Build de Angular
# ==========================
FROM node:22-alpine AS build

WORKDIR /app
COPY package*.json ./

# Instalar dependencias
RUN npm install --legacy-peer-deps

# Copiar todo el código
COPY . .

# Construir la aplicación Angular (versión producción)
RUN npm run build -- --configuration production

# ==========================
#  Etapa 2: Servir con Nginx
# ==========================
FROM nginx:alpine

# Copiar los archivos compilados de Angular al servidor Nginx
COPY --from=build /dist/frontend /usr/share/nginx/html

# Reemplazar configuración de Nginx
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8081
CMD ["nginx", "-g", "daemon off;"]
