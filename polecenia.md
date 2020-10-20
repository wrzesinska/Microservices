
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