# build stage
FROM node:16-alpine as build-stage
RUN npm install -g pnpm

WORKDIR /app

COPY ["package.json", "pnpm-lock.yaml", "./"]
COPY . .
RUN pnpm install
RUN pnpm build

# production stage
FROM nginx:1.17-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]