import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from "../Containers/HomeContainer";
import ProfileContainer from "../Containers/ProfileContainer";
import DonateContainer from "../Containers/DonateContainer";
import Landing from "./Landing";
import AdventureShow from "./DonateComponents/AdventureShow";
import CreateAdventure from "./CreateAdventure";

const RouterComp = () => {
  return (
    <Switch>
      <Route path="/home" component={HomeContainer} />
      <Route path="/donate" component={DonateContainer} />
      <Route path="/profile" component={ProfileContainer} />
      <Route path="/login" component={Landing} />
      <Route path="/create" render={props => <CreateAdventure {...props} />} />
      <Route path="/:id" component={AdventureShow} />
      <Route path="/" component={HomeContainer} />
    </Switch>
  );
};

export default RouterComp;
