FROM node:18.14.0 as node
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=node /usr/src/app/dist/angular-template /usr/share/nginx/html
