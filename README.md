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
$ yarn install
```

### Run the aplication

Development environment
```sh
$ yarn start
```
### Notes

the API for the pagination always returns the same data, no matter what id is passed, that's why  every time that pagination is used the view doesn't change.

License
----

MIT