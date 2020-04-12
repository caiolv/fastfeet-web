import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';

import Deliveries from '../pages/Deliveries';
import SignIn from '../pages/SignIn';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/deliveries" exact component={Deliveries} isPrivate/>
    </Switch>
  );
}
