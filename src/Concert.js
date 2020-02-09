import React from "react";
import "./Concert.css";
import "./App.css";

import { AwesomeButton } from "react-awesome-button";
import ReactFullpage from "@fullpage/react-fullpage";
import "react-awesome-button/dist/styles.css";

class Concert extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      did: "",
      sortcode: "",
      accountno: "",
      total: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  componentWillMount() {
    this.selectedSeats = new Set();
  }

  toggle(e) {
    const id = e.target.id;
    if (this.selectedSeats.has(id)) {
      this.selectedSeats.delete(id);
      if (id.includes("vip")) this.setState({ total: this.state.total - 10 });
      else this.setState({ total: this.state.total - 2 });
    } else {
      this.selectedSeats.add(id);
      if (id.includes("vip")) this.setState({ total: this.state.total + 10 });
      else this.setState({ total: this.state.total + 2 });
    }

    console.log(this.state.total);
  }

  render() {
    return (
      <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000} /* Options here */
        controlArrows={false}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div className="slide">
                  <div className="App">
                    <div className="Box">
                      <h1 className="textstage">Stage</h1>
                      <div className="boxleft">Area 1</div>
                      <div className="boxright">Area 2</div>
                      <div className="boxtop">Area 3</div>
                    </div>

                    <div className="price">
                      <h1>Price</h1>
                      <h2>£{this.state.total}</h2>
                      <AwesomeButton
                        type="primary"
                        onPress={() => fullpageApi.moveSlideRight()}
                      >
                        Submit
                      </AwesomeButton>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="App">
                    <div class="container">
                      <div class="c2">
                        <form class="signin">
                          <h1 class="signup1">Payment Details</h1>
                          <input
                            name="username"
                            type="text"
                            placeholder="Username*"
                            class="field"
                            onChange={this.handleChange}
                          />
                          <input
                            name="password"
                            type="password"
                            placeholder="Password*"
                            class="field"
                          />
                          <input
                            name="did"
                            type="text"
                            placeholder="Did*"
                            class="field"
                          />
                          <input
                            name="sortcode"
                            type="text"
                            placeholder="Sortcode"
                            class="field2"
                          />
                          <input
                            name="accountno"
                            type="text"
                            placeholder="Account Number*"
                            class="field2"
                          />
                        </form>
                        <AwesomeButton
                          type="secondary"
                          onPress={() => fullpageApi.moveSlideLeft()}
                        >
                          Go Back
                        </AwesomeButton>
                        <br />
                        <br />

                        <AwesomeButton
                          type="primary"
                          onPress={() => fullpageApi.moveSlideRight()}
                        >
                          Submit
                        </AwesomeButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

export default Concert;
