import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import Login from "../pages/detail/Login";
import ChuChon from "../pages/detail/ChuChon";

const Routes = () => {
  return (
    <Switch>
      <Route path="/ChuChon" exact component={ChuChon} />
      <Route path="/Login" exact component={Login} />
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/:category" component={Catalog} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default Routes;
