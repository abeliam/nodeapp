FROM node:9-alpine
WORKDIR /app
COPY . .
RUN npm install -g lerna
RUN npm run setup
CMD npm start
EXPOSE 8080
