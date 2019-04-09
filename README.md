# ecommerce-shipping-itrellis-prototype

Prototype for e-commerce shipping web app

## Getting Started

You can download this prototype by using "git clone <web url>" command or downloading the zipped folder. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need to install these to be able to run this project on your development machine

```
NodeJS  (version 10.15.0)
NPM     (version 6.4.1)
```

### Installing

After downloading, unzipping this project, installing NodeJS and NPM, using terminal/bash with Git installed, go into the project folder. Once inside, there are these directories and files:

```
client/
index.js
node_modules/
package-lock.json
routes/
config/
models/
package.json
README.md
```

The package.json file lists all the necessary server information about this particular project such as engines, scripts and more importantly, dependencies. By running 

```
npm install
```

command, all the necessary dependencies such as

```
concurrently
express
mongoose
nodemon
```

for server-side modules will be installed.

