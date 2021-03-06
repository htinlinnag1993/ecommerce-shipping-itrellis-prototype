# ecommerce-shipping-itrellis-prototype

Prototype for e-commerce shipping web app

## Getting Started

You can download this prototype by using "git clone <web url>" command or downloading the zipped folder. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need to install these globally to be able to run this project on your local development machine

```
NodeJS  (version 10.15.0)
NPM     (version 6.4.1)
```

### Installing (Server-Side Setup)

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
Concurrently  (4.1.0)
Express       (4.16.4)
Mongoose      (5.4.22)
Nodemon       (1.18.10)
```

for server-side modules will be installed and ready to use.

### Installing (Client-Side Setup)

The building blocks of client-side of this project was set up using create-react-app. Therefore, create-react-app needs to be already installed globally in your local development machine to run this project.

After create-react-app has been installed globally, no further setting up for client-side is necessary.

## Running This Project

In local development environment, this project has two servers: one for NodeJS server-side app and another for create-react-app client-side app.

NodeJS localhosts on port 5000 and React localhosts on port 3000. Therefore, make sure that those ports are available while running this project

### Setting Up Credentials For Local Development

Credentials (MongoDB Atlas connection string with username and password and others) necessary for running this app locally is also not included in this public repo because those credentials are confidential. Inquire me for the MongoDB Atlas credentials if necessary. 

But there is another option. You can open a new MongoDB Atlas account and create a new custer with the same exact collection of the sample data set mentioned later in this documentation. But following this option, you will need to configure security setting to make that cluster give access to your locally running project. 

Then you will need to create a file called

```
dev.js
```

under config in your local project directory. Next, the following code must be added in that dev.js file.

```
module.exports = {
  mongodbURI: '< MongDB Connection String with username and password >'
};
```

Replace < MongDB Connection String with username and password > with yours and save dev.js file.

### Running Locally on localhost

Considering you have necessary correct dev.js file setup and credentials, you can now run (localhost) the project locally.

Using terminal/bash, navigate to the project folder (example: /ecommerce-shipping-itrellis-prototype/ ).
Run this command to start up both NodeJS server and create-reate-app server:

```
npm run dev
```

This will take a couple of minutes to start up the servers. After that, a new tab with 

```
http://localhost:3000
```

will appear in your default browser. That is the main UI of this project. You have access to the project through this UI and interact with the app.


## Data (On MongoDB Atlas)

### Sample Data Set

Sample data set that contains products' information of the ecommerce platform is exactly as below:

```
  {
		"productId": 1,
		"productName": "a",
		"inventoryQuantity": 43,
		"shipOnWeekends": true,
		"maxBusinessDaysToShip": 13
	},
	{
		"productId": 2,
		"productName": "b",
		"inventoryQuantity": 70,
		"shipOnWeekends": true,
		"maxBusinessDaysToShip": 18
	},
	{
		"productId": 3,
		"productName": "c",
		"inventoryQuantity": 33,
		"shipOnWeekends": false,
		"maxBusinessDaysToShip": 15
	},
	{
		"productId": 4,
		"productName": "d",
		"inventoryQuantity": 52,
		"shipOnWeekends": false,
		"maxBusinessDaysToShip": 18
	},
	{
		"productId": 5,
		"productName": "e",
		"inventoryQuantity": 39,
		"shipOnWeekends": true,
		"maxBusinessDaysToShip": 19
	}
```

A collection with the same five documents (records) as above resides on my private MongoDB Atlas server. You will need to create the same collection with those 5 documents (records) on your own remotely hosted MongoDB database on your MongoDB Atlas.

## Live Demo App on Heroku

Live Demo App version of this app is being hosted on Heroku with a completely separate repo. The address is:

```
https://ecommerce-itrellis.herokuapp.com/
```

## Needs, Upcoming Updates & Further Implementations

- Product list on the web UI of the app lists out all the products from the collection in the database. This can lead to a serious issue when we have many products (records) in the collection. The modules for handling this properly will be added soon.

- At this moment, the app does not have feature for letting users change the order date. All the products' latest shipping dates are calculated using today's date (current local date and time). The modules for letting users change the order date and updating the latest shipping dates will be added in the second version of this app.

- In the next version of this app, user accounts, sign-up and sign-in mechanisms will be implemented. Identification and authentication are very essential to provide customized experiences and UI to the users. "Sign Up With Google" and "Sign In With Google" features will be added as it is easier, more convenient, more secure and more reliable for users to sign up for a new account and sign in using their Google account. Google recently announced to deprecate their Google+ API and start providing a different API for the above features. The new API will be used.

## Version

- Current version	: 1.1.0
- Upcoming version	: 1.2.0

## Authors

* **Htin Linn Aung** - *1 st Prototype*








