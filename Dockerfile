FROM node:12.16.1-alpine3.9 as build
WORKDIR /app
COPY . /app
EXPOSE 3000
