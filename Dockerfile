FROM node:current-bullseye

LABEL version="1.1"
LABEL description="This is my Portafolio <3."
LABEL maintainer = ["aguado.soft2016@gmail.com", "davidmariolc@gmail.com"]

WORKDIR /usr/src/app/

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --omit=dev

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

