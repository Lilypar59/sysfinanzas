# Etapa 1: Build de la app con Node
FROM node:20-alpine AS build
WORKDIR /app

# Copiar package.json y package-lock.json o pnpm-lock.yaml
COPY package*.json ./

# Instalar TODAS las dependencias (incluyendo devDependencies)
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Compilar el proyecto (Vite)
RUN npm run build

# Etapa 2: Servir el contenido con Nginx
FROM nginx:1.27-alpine
WORKDIR /usr/share/nginx/html

# Copiar el build generado desde la etapa anterior
COPY --from=build /app/dist ./

# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

