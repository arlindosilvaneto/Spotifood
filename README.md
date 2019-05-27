# Spotifood

iFood recruitment application solution from @arlindoneto

## Base architecture bullet points

* NodeJS version >= 10.0.0
* Use of create-react-app for fast boilerplating
* Use of Material-UI for fast component and layout construction
* Use of React Styleguide to visualize isolated components during development

## Spotify Token

As the token always get expired, when a new token become required, it should be updated in the /src/config/app.js file.

## Styleguide

Since there's no test for this application, during development I've used styleguidist to check the components independently.
To run the styleguide server, use `npm run style-dev`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run style-dev`

Runs the styleguidist server in development mode.
