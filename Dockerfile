from node:16-slim

workdir /app
copy . /app

run npm i
run npm run build

expose 8080

cmd [ "npm", "start" ]