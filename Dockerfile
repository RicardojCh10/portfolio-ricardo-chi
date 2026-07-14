# Etapa 1: Construcción
FROM node:26-alpine AS builder
WORKDIR /app

# Copiar dependencias primero
COPY package*.json ./
RUN npm ci

# Copiar el código fuente y construir
COPY . .
RUN npm run build

# Etapa 2: Producción (Servidor Nginx)
FROM nginx:alpine

# >>> LA SOLUCIÓN: Parchar las vulnerabilidades del sistema base <<<
RUN apk update && apk upgrade

# Copiamos los archivos estáticos generados por Astro a Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]