import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Tasks from 'views/Tasks';
import Teams from 'views/Teams';
import Navbar from 'components/organisms/Navbar/Navbar';
import MainTemplate from '../templates/MainTemplate';

const Root = () => {
  return (
    <MainTemplate>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/teams" />} />
          <Route path="/teams" component={Teams} />
          <Route path="/tasks" component={Tasks} />
        </Switch>
      </BrowserRouter>
    </MainTemplate>
  );
};

export default Root;
