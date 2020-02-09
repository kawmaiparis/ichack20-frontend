import React, { Children } from "react";
import "./App.css";

import { AwesomeButton } from "react-awesome-button";
import ReactFullpage from "@fullpage/react-fullpage";
import "react-awesome-button/dist/styles.css";
import axios from "axios";

class Plane extends React.Component {
  constructor() {
    super();
    this.state = {
      wallet_id: "",
      wallet_key: "",
      prover_did: "",
      prover_mid: "",
      selectedSeats: "",
      total: 0,
      seats: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.jake = this.jake.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  componentWillMount() {
    this.setState({ selectedSeats: new Set() });
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "/get-event?name=airline"
    }).then(response => this.setState({ seats: response.data.areas }));
  }

  toggle(e) {
    const id = e.target.id;
    if (this.state.selectedSeats.has(id)) {
      this.state.selectedSeats.delete(id);
      if (id.charAt(0) <= 3) this.setState({ total: this.state.total - 10 });
      else this.setState({ total: this.state.total - 2 });
    } else {
      this.state.selectedSeats.add(id);
      if (id.charAt(0) <= 3) this.setState({ total: this.state.total + 10 });
      else this.setState({ total: this.state.total + 2 });
    }
  }

  jake() {
    const {
      wallet_id,
      wallet_key,
      prover_did,
      prover_mid,
      selectedSeats,
      total
    } = this.state;
    console.log(this.state);
    const url = `http://146.169.189.39:8080/transactions/buy_ticket?wallet_id=${wallet_id}&wallet_key=${wallet_key}&prover_did=${prover_did}&prover_mid=${prover_mid}&price=${total}&event=airline&seat=${Array.from(
      selectedSeats
    )}`;

    console.log(url);
    axios({
      method: "GET",
      url: url
    }).then(response => {
      console.log(response);
      alert(response.data);
    });
  }

  renderSeats() {
    let rows = [];
    for (const data of this.state.seats) {
      if (data.name >= 10) {
        break;
      }
      let row = [];
      for (const seat of data.seats) {
        const id = data.name + seat.number;
        if (data.name <= 3) {
          row.push(
            <li class="seat vip">
              <input
                type="checkbox"
                id={id}
                onChange={this.toggle}
                disabled={seat.taken}
              />
              <label for={id}>{id}</label>
            </li>
          );
        } else {
          row.push(
            <li class="seat">
              <input
                type="checkbox"
                id={id}
                onChange={this.toggle}
                disabled={seat.taken}
              />
              <label for={id}>{id}</label>
            </li>
          );
        }
      }
      rows.push(
        <li class="row row--2">
          <ol class="seats" type="A">
            {row}
          </ol>
        </li>
      );
    }
    return rows;
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
                    <div class="plane">
                      <div class="cockpit">
                        <h1>THIS IS AN AIRPLANE</h1>
                      </div>
                      <div class="exit exit--front fuselage"></div>
                      <ol class="cabin fuselage"></ol>

                      <ol class="cabin fuselage">{this.renderSeats()}</ol>
                      <div class="exit exit--back fuselage"></div>
                    </div>
                    <div className="price legend">
                      <h1>Price</h1>
                      <h2>£{this.state.total}</h2>
                      <div className="templateVIP">
                        <li class="seat vip more">
                          <input type="checkbox" />
                          <label for="vip">.</label>
                        </li>
                      </div>
                      VIP ticket - £10
                      <li class="seat template">
                        <input type="checkbox" />
                        <label for="normal">.</label>
                      </li>
                      Poor People ticket - £2
                      <br />
                      <br />
                      <AwesomeButton
                        type="primary"
                        size={70}
                        onPress={() => {
                          console.log(this.state.selectedSeats);
                          fullpageApi.moveSlideRight();
                        }}
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
                          {/* <h1 class="signup1">Payment Details</h1> */}
                          <h2>
                            Confirm payment for seats:{" "}
                            {Array.from(this.state.selectedSeats).join(",")}
                          </h2>
                          <input
                            name="wallet_id"
                            type="text"
                            placeholder="Username"
                            class="field"
                            onChange={this.handleChange}
                          />
                          <input
                            name="wallet_key"
                            type="password"
                            placeholder="Password"
                            class="field"
                            onChange={this.handleChange}
                          />
                          <input
                            name="prover_did"
                            type="text"
                            placeholder="Did"
                            class="field"
                            onChange={this.handleChange}
                          />
                          <input
                            name="prover_mid"
                            type="text"
                            placeholder="Master Secret ID"
                            class="field"
                            onChange={this.handleChange}
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

                        <AwesomeButton type="primary" onPress={this.jake}>
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

export default Plane;
