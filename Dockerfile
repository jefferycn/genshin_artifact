FROM node:14.15.4
WORKDIR /app
COPY package* ./
RUN npm ci
COPY . .
CMD npm run serve
EXPOSE 8080
