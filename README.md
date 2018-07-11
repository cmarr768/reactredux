This is meant to be a shell app for a react+redux app.  I started with the reactshell codebase.

mkdir reactredux
npm init
follow reactshell installs

    npm install redux react-redux --save

I pulled this together from my react redux app and used the concepts
from the redux tutorial found http://redux.js.org/docs/basics/ExampleTodoList.html and from this https://github.com/happypoulp/redux-tutorial.

I changed the folder structure to describe what types of files will be found in them.
Using materialize.css.

Adding superagent

    npm install superagent

This has been updated to run in a docker container.
    docker build -t reactredux .
    docker run -p 4000:8080 reactredux