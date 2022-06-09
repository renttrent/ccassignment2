FROM ubuntu 

WORKDIR /usr/app
COPY ./ ./

RUN apt-get update
RUN apt-get install nodejs npm -y
RUN npm install

CMD ["npm", "start"]