FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
ARG BACK_URL 
ENV BACK_URL $BACK_URL
COPY package.json /usr/src/app/
RUN npm install
RUN npm install webpack-dev-server webpack yarn -g 
COPY . /usr/src/app

RUN yarn install
CMD npm start

EXPOSE 3000
