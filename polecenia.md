
# Git clone
<!-- git clone https://bitbucket.org/ev45ive/node-micro-gsk.git -->
https://bitbucket.org/ev45ive/node-micro-gsk/src => (+) => Fork

git clone https://bitbucket.org/<twoj user>/node-micro-gsk.git
cd node-micro-gsk
git remote add matt https://bitbucket.org/ev45ive/node-micro-gsk.git

# Stash local changes, pull remote changes
git stash -u
git pull -t matt master 
git pull
git stash apply

# INstalllacje
docker desktop
node 12/14
chrome (node debugger)
JSON viewer
https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh

VS CODE
+ docker ext
Postman
https://www.postman.com/downloads/

# Nodemon
npm i -g nodemon
set PORT=8080 nodemon start/index.js param123
PORT=8080 nodemon start/index.js param123

nodemon start/index.js 

# NPM Semver
https://docs.npmjs.com/about-semantic-versioning
https://semver.npmjs.com/

npm outdated
npm update ABC
// use package.json (can update libs)
npm i 
// use package-lock.json (use exact versions)
npm ci 

# Typescript
npm i -g typescript
tsc --init

tsc

# 12 Factor Cloud app - Scaling
https://12factor.net/


# Validation
https://joi.dev/
https://github.com/sideway/joi
https://github.com/arb/celebrate
<!-- vs -->
https://express-validator.github.io/docs/
https://github.com/typestack/class-validator
https://github.com/ajv-validator/ajv

# Authorization
https://github.com/expressjs/session
+ redis store


# Docker 
docker run
--rm // remove after close
-it // interactive terminal
-d // detach terminal
--name="nodeapp"
--label="payments-ms"

https://docs.docker.com/engine/reference/commandline/ps/

docker inspect testapp --format "{{json .Config.Labels}}"

docker inspect testapp --format "{{json .NetworkSettings.IPAddress}}"



# Postgres
docker run --name db-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
docker run -it --rm --network some-network postgres psql -h $(docker inspect db-postgres --format "{{json .NetworkSettings.IPAddress}}") -U postgres

<!-- Private docker network -->
docker network create postgres-net

<!-- Database accesible only in private network -->
docker run --name db-postgres --network postgres-net -e  POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres

<!-- If not connected -->
docker network connect postgres-net db-postgres

<!-- Run one time command in containr with private network -->
docker run -it --rm --network postgres-net postgres psql -h db-postgres -U postgres

<!-- https://www.pgadmin.org/docs/pgadmin4/latest/container_deployment.html -->
<!-- Share -->
docker volume create pgadmin-config

<!-- Run one time web interface in containr with private network -->
docker run --rm --network postgres-net --name="pgadmin" -e PGADMIN_DEFAULT_EMAIL=admin@admin.com -e PGADMIN_DEFAULT_PASSWORD=admin -p 8080:80 -v pgadmin-config:/var/lib/pgadmin/ dpage/pgadmin4

<!-- New Connection:
host: db-postgres
user: postgres
db: postrgres
password: mysecretpassword
 -->


# Sequelize CLI
// package.json > scripts:
npm run db === ts-node ./node_modules/sequelize-cli/lib/sequelize 

npm run db -- init // creates directories

https://khalilstemmler.com/articles/auto-increment-or-uuid/

npm run db -- model:generate --name User --attributes username:string,password:string
npm run db -- seed:generate --name demo-user

npm run db -- db:migrate:status
npm run db -- db:migrate --from... --to..

https://github.com/sequelize/umzug