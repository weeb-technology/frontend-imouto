FROM node:10.14 as build

RUN npm install -g @angular/cli

WORKDIR /frontend

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN ls
RUN ng build --aot=true --prod=true

FROM weebtechnology/simple-fileserver:0.1.0

COPY --from=build /frontend/dist/Frontend/ /srv/

CMD ["/server"]
