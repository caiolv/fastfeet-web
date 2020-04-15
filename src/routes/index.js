import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';

import Deliveries from '../pages/Deliveries';
import DeliveryForm from '../pages/Deliveries/Form';
import SignIn from '../pages/SignIn';
import Couriers from '../pages/Couriers';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/deliveries" exact component={Deliveries} isPrivate />
      <Route path="/deliveries/new" exact component={DeliveryForm} isPrivate />
      <Route
        path="/deliveries/edit/:id"
        exact
        component={DeliveryForm}
        isPrivate
      />
      <Route path="/couriers" exact component={Couriers} isPrivate />
      {/* <Route path="/deliveries/new" exact component={CouriersForm} isPrivate /> */}
      {/* <Route
        path="/deliveries/edit/:id"
        exact
        component={DeliveryForm}
        isPrivate
      /> */}
    </Switch>
  );
}
