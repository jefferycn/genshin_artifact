FROM node:14.18.2
WORKDIR /app
RUN npm install -g serve
VOLUME /app/dist
CMD serve ./dist
EXPOSE 3000
