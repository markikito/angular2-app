FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

RUN npm install webpack-dev-server webpack yarn -g 
RUN yarn install
CMD npm start

EXPOSE 4200
