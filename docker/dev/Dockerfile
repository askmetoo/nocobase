FROM node:lts-alpine

WORKDIR /app
ADD . .
RUN apk add --no-cache python3 make g++ 
RUN yarn install && yarn nocobase install
RUN yarn build

ENTRYPOINT  ["yarn","start"]
EXPOSE 13000