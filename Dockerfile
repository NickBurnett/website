FROM node:16-slim

ADD . /app
WORKDIR /app
RUN npm i && npm run build

EXPOSE 3000

CMD [ "npm", "start" ]