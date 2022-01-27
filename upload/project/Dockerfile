FROM node:alpine AS dependencies
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install

FROM node:alpine AS run
WORKDIR /usr/src/app
COPY --from=dependencies /usr/src/app/node_modules ./node_modules
COPY package.json ./
COPY ./src ./src
EXPOSE 8080
CMD npm start