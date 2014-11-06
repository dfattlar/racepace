#MySite
Uses HotTowel Angular starter project as its base. (https://github.com/johnpapa/HotTowel-NG)

## Structure
The structure also contains a gulpfile.js and a server folder. The server is there just so we can serve the app using node. Feel free to use any server you wish.

	/src
		/client
			/app
			/content
	
## Pre-Requisites
Install [Node.js](http://nodejs.org)

Install these NPM packages globally:

`npm install -g bower gulp nodemon`

## Installing Packages
- Open terminal
- Type `npm install`

`npm install` will install bower packages too, but you can do it manually.
- Open terminal
- Type `bower install`

## Running
Runs locally, no database required.

Type `gulp serve-dev` and browse to `http://localhost:7300`
