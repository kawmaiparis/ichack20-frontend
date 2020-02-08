import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Plane from "./Plane";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Plane} />
        {/* <Route exact path="/ticketing" component={Ticketing} /> */}
      </Router>
    );
  }
}

export default App;
