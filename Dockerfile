FROM node:9-alpine
WORKDIR /usr/src/app
COPY . .
RUN make
CMD make start
EXPOSE 8080 8181 8282
