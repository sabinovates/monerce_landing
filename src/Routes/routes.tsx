import React, {lazy} from 'react';

import { Routes as Switch, Route } from "react-router-dom";

const Home = lazy(() => import("../Pages/Home/Home"));

const Routes = () => {
  return (
    <Switch>
        <Route path="/" element={<Home />} index />
    </Switch>
  )
}

export default Routes