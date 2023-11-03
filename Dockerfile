# build stage
FROM node:16-alpine as build-stage
RUN npm install -g pnpm
RUN npm install -g pm2

WORKDIR /app

COPY ["package.json", "pnpm-lock.yaml", "./"]
# COPY ecosystem.config.ejs .
COPY . .
RUN pnpm install
RUN pnpm build

# production stage
# FROM nginx:1.17-alpine as production-stage
# COPY --from=build-stage /app/dist /usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]

CMD [ "pm2-runtime", "start", "ecosystem.config.cjs" ]
