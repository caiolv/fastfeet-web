import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Deliveries from '../pages/Deliveries';
import SignIn from '../pages/SignIn';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/deliveries" exact component={SignIn} />
    </Switch>
  );
}
