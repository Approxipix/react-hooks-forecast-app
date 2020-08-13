import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import CityWeather from '../pages/CityWeather/CityWeather';
import Settings from '../pages/Settings/Settings';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/settings" component={Settings}/>
    <Route exact path="/w/:id" component={CityWeather}/>
  </Switch>
);

export default Routes;
