#Nodejs - Expres - Pgsql - for starter
##1. Clone
    git clone https://github.com/nvdiepse/base-nodejs.git
   
## 2. install nodejs
    [download][https://nodejs.org/en/download/]
## 3. create file .env
    DB_HOST=127.0.0.1
    DB_NAME=logic
    USER_NAME=postgres
    DB_PASSWORD=1
    PORT=5000
    DB_PORT=5432

## 4. start
    npm install
    knex migrate
    knex seed
    npm run dev // development
    npm run build // production 