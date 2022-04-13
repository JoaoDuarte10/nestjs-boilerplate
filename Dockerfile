FROM node:16-alpine

WORKDIR /home/$USER/app

COPY package.*json .

RUN npm install

COPY . .
