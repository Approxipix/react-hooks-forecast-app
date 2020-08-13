# React HooksF Forecast App
Simple application based on React/Redux with actual weather information and forecast.
<div>
  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/approxipix/react-hooks-forecast-app?color=2b9348">
  <a href="https://david-dm.org/approxipix/react-hooks-forecast-app"><img src="https://david-dm.org/approxipix/react-hooks-forecast-app/status.svg" alt="Dependencies status" /></a>
  <a href="https://github.com/approxipix/react-hooks-forecast-app/blob/master/LICENSE"><img src="https://img.shields.io/github/license/elangosundar/awesome-README-templates?color=2b9348" alt="License Badge"/></a>
</div>

## Live Demo
Link: https://approxipix.github.io/react-hooks-forecast-app

## Tech stack
* [React](https://github.com/facebook/react)
* [Redux](https://github.com/reactjs/redux)
* [React Thunk](https://github.com/reduxjs/redux-thunk)
* [Antd](https://ant.design)
* [OpenWeatherMap API](https://openweathermap.org/api)
* [Geobytes City API](https://geobytes.com)

## Installation

Clone project:
```shell
https://github.com/Approxipix/react-hooks-forecast-app.git
```

Then change into that folder:
```shell
cd react-hooks-forecast-app
```

Install project dependencies:
```shell
npm install
```

Build for production:
```shell
npm run build
```

Start up a local server:
```shell
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Instructions

You need a free API Key by [OpenWeatherMap](http://openweathermap.org/) to fetch weather information.

You can set API Key in two ways:

1. Go to ```src/redux/rootReducer/reducer.js``` and set your API Key in initial state.
    ```shell
    const initialState = {
      apiKey: <API_KEY>,
      ...
    };
    ```
2. After you run the project, go to the settings page ([http://localhost:3000/settings](http://localhost:3000/settings)) and set your API key.

## License  <a href="https://github.com/approxipix/react-hooks-forecast-app/blob/master/LICENSE"><img src="https://img.shields.io/github/license/elangosundar/awesome-README-templates?color=2b9348" alt="License Badge"/></a>
This project is licensed under the MIT License. See the [LICENSE](https://github.com/approxipix/react-hooks-forecast-app/blob/master/LICENSE) file for more information.

