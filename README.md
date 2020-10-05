# Rick App
---
## Jaime Andres Velez Rojas
course page, with the basic search functionality and pagination


### DevTools

 This application uses the next libraries and packages to work properly
* [ReactJS](https://reactjs.org/) A JavaScript library for building user interfaces 
* [Redux](https://redux.js.org/) A predictable state container for JavaScript apps.
* [Axios](https://www.npmjs.com/package/axios) Promise based HTTP client for the browser and node.js
* [React-Router](https://www.npmjs.com/package/react-router) Declarative routing for React.
* [Thunk](https://www.npmjs.com/package/react-thunk) Define React functional stateless components as thunks


###  Download
Download from the repository [here](https://github.com/jhudaz/Rick), or use the git command to clone it:
```sh
$ git clone https://github.com/jhudaz/Rick.git
```
### Installation
#### Requirements
 have installed [NodeJs](https://nodejs.org/en/) , [Yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable), and a text editor
 
 

Install the dependencies.

```sh
$ cd rick
$ npmi install
```

### Run the aplication

Development environment, the app is running in the port 3000 by default
```sh
$ npm start
```
this will display the app on the browser
![app](https://raw.githubusercontent.com/jhudaz/Rick/master/resources/images/app.png)


### Test

You must have running the app, to make the test so in another console you have to use the next command

```sh
$ npm run cypress:open
```
This will display a window like this one

![cypress-open](https://raw.githubusercontent.com/jhudaz/Rick/master/resources/images/cypress-open.png)

you must click on the file `test_spec.js` and this will open the cypress browser,
where you can see every step of the test with it result

![cypress-test](https://raw.githubusercontent.com/jhudaz/Rick/master/resources/images/cypress-test.png)

### Notes

the API for the pagination always returns the same data, no matter what id is passed, that's why  every time that pagination is used the view doesn't change.

License
----

MIT
