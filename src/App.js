import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Plane from "./Plane";
import Concert from "./Concert";
import Issuer from "./Issuer";
import Logo from "./Logo";
// import AddPayment from "./AddPayment";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Plane} />
        <Route exact path="/concert" component={Concert} />
        <Route exact path="/issuer" component={Issuer} />
        <Route exact path="/logo" component={Logo} />
        {/* <Route exact path="/addpayment" component={AddPayment} /> */}
      </Router>
    );
  }
}

export default App;
