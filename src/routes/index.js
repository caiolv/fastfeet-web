import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';

import Deliveries from '../pages/Deliveries';
import DeliveryForm from '../pages/Deliveries/Form';
import SignIn from '../pages/SignIn';
import Couriers from '../pages/Couriers';
import CourierForm from '../pages/Couriers/Form';
import Recipients from '../pages/Recipients';
import RecipientForm from '../pages/Recipients/Form';

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
      <Route path="/couriers/new" exact component={CourierForm} isPrivate />
      <Route
        path="/couriers/edit/:id"
        exact
        component={CourierForm}
        isPrivate
      />
      <Route path="/recipients" exact component={Recipients} isPrivate />
      <Route path="/recipients/new" exact component={RecipientForm} isPrivate />
      <Route
        path="/recipients/edit/:id"
        exact
        component={RecipientForm}
        isPrivate
      />
    </Switch>
  );
}
