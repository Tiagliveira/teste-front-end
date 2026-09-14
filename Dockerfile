# Estágio 1: Build da aplicação React com Node 20
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# variável de ambiente .
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

# Estágio 2: Nginx como servidor e Proxy Reverso
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Configuração do Nginx com fallback de SPA e Proxy 
RUN echo 'server { \
    listen 80; \
    location / { \
    root /usr/share/nginx/html; \
    index index.html index.htm; \
    try_files $uri $uri/ /index.html; \
    } \
    location /api-econverse/ { \
    proxy_pass https://teste-front-end-junior.econverse.com.br/; \
    proxy_ssl_server_name on; \
    } \
    }' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]