FROM node:14.15.4
WORKDIR /app
RUN npm install -g serve
COPY dist dist
CMD serve ./dist
EXPOSE 3000
