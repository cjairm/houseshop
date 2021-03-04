FROM node:12

WORKDIR /derby_project

COPY package.json /derby_project
RUN cd /derby_project && npm install 

COPY . /derby_project

CMD ["npm", "start"]    
