import React from "react";
import "./../styles/global.css";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import AboutPage from "./about";
import PricingPage from "./pricing";
import LegalPage from "./legal";
import { Switch, Route, Router } from "./../util/router";
import NotFoundPage from "./404";
import "./../util/analytics";

function App(props) {
  return (
    <Router>
      <>
        <Navbar />

        <Switch>
          <Route exact path="/" component={IndexPage} />

          <Route exact path="/about" component={AboutPage} />

          <Route exact path="/pricing" component={PricingPage} />

          <Route exact path="/legal/:section" component={LegalPage} />

          <Route component={NotFoundPage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
