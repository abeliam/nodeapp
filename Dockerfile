FROM node:9-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install -g pnpm
RUN apk update
RUN apk add python make g++
RUN npm config set store .store
RUN pnpm run setup
RUN pnpm run build
CMD pnpm start
EXPOSE 8080 8181 8282
