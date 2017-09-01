
todoList/ contains the Angular frontent and Angular CLI for the todolist app

todoListApi/ contains the node.js backend RESTful API

to run:

1. start up the MongoDB with $ mongod

2. start the REST API on http://localhost:3000 by navigating into todoListApi/ and running $ npm start

3. start the Angular frontend on http://localhost:4200 by navigating into todoList and running $ ng serve

Voila! open your browser and go to localhost:4200 to see the app in action

4. to run the angular test suite run: ng test

Also, you can run the test json server in todoList/ by running: $ npm run json-server
(edit db.json to match your json structure)

The RESTful backend was based off the following tutorial: https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

The Angular frontent was developed with the help of the following tutorial: https://www.sitepoint.com/angular-2-tutorial/
