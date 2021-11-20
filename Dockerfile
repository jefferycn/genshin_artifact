FROM node:14.15.4
WORKDIR /app
COPY package* ./
RUN npm ci
RUN echo fs.inotify.max_user_watches=524288 | tee -a /etc/sysctl.conf
COPY . .
CMD npm run serve
EXPOSE 8080
