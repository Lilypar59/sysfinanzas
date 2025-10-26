# Etapa 1: Construcción del sitio con Node
FROM node:20-alpine AS build

WORKDIR /app

# Copiar dependencias e instalarlas
COPY package*.json ./

# Instalar TODAS las dependencias (incluyendo devDependencies)
RUN npm install

# Copiar código y construir
COPY . .

# Compilar el proyecto (Vite)
RUN npm run build

# Etapa 2: Servir el contenido con Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copiar el build generado desde la etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

#expone puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

