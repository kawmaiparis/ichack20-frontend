import React from "react";
import "./App.css";

import { AwesomeButton } from "react-awesome-button";
import ReactFullpage from "@fullpage/react-fullpage";
import "react-awesome-button/dist/styles.css";

class Plane extends React.Component {
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
                    <div class="plane">
                      <div class="cockpit">
                        <h1>Cockpit</h1>
                      </div>
                      <div class="exit exit--front fuselage"></div>
                      <ol class="cabin fuselage"></ol>

                      <ol class="cabin fuselage">
                        <li class="row row--1">
                          <ol class="seats" type="A">
                            <li class="seat vip">
                              <input
                                type="checkbox"
                                id="1A vip"
                                onChange={this.toggle}
                              />
                              <label for="1A vip">1A</label>
                            </li>
                            <li class="seat vip">
                              <input
                                type="checkbox"
                                id="1B vip"
                                onChange={this.toggle}
                              />
                              <label for="1B vip">1B</label>
                            </li>
                            <li class="seat vip">
                              <input
                                type="checkbox"
                                id="1C vip"
                                onChange={this.toggle}
                              />
                              <label for="1C vip">1C</label>
                            </li>
                            <li class="seat vip">
                              <input
                                type="checkbox"
                                disabled
                                id="1D vip"
                                onChange={this.toggle}
                              />
                              <label for="1D vip">Occupied</label>
                            </li>
                          </ol>
                        </li>
                        <li class="row row--2">
                          <ol class="seats" type="A">
                            <li class="seat vip">
                              <input
                                type="checkbox"
                                id="2A vip"
                                onChange={this.toggle}
                              />
                              <label for="2A vip">2A</label>
                            </li>
                            <li class="seat vip">
                              <input
                                type="checkbox"
                                id="2B vip"
                                onChange={this.toggle}
                              />
                              <label for="2B vip">2B</label>
                            </li>
                            <li class="seat vip">
                              <input
                                type="checkbox"
                                id="2C vip"
                                onChange={this.toggle}
                              />
                              <label for="2C vip">2C</label>
                            </li>
                            <li class="seat vip">
                              <input
                                type="checkbox"
                                id="2D vip"
                                onChange={this.toggle}
                              />
                              <label for="2D vip">2D</label>
                            </li>
                          </ol>
                        </li>
                        <li class="row row--3">
                          <ol class="seats" type="A">
                            <li class="seat vip">
                              <input
                                type="checkbox"
                                id="3A vip"
                                onChange={this.toggle}
                              />
                              <label for="3A vip">3A</label>
                            </li>
                            <li class="seat vip">
                              <input
                                type="checkbox"
                                id="3B vip"
                                onChange={this.toggle}
                              />
                              <label for="3B vip">3B</label>
                            </li>
                            <li class="seat vip">
                              <input
                                type="checkbox"
                                id="3C vip"
                                onChange={this.toggle}
                              />
                              <label for="3C vip">3C</label>
                            </li>
                            <li class="seat vip">
                              <input
                                type="checkbox"
                                id="3D vip"
                                onChange={this.toggle}
                              />
                              <label for="3D vip">3D</label>
                            </li>
                          </ol>
                        </li>
                        <li class="row row--4">
                          <ol class="seats" type="A">
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="4A"
                                onChange={this.toggle}
                              />
                              <label for="4A">4A</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="4B"
                                onChange={this.toggle}
                              />
                              <label for="4B">4B</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="4C"
                                onChange={this.toggle}
                              />
                              <label for="4C">4C</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="4D"
                                onChange={this.toggle}
                              />
                              <label for="4D">4D</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="4E"
                                onChange={this.toggle}
                              />
                              <label for="4E">4E</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="4F"
                                onChange={this.toggle}
                              />
                              <label for="4F">4F</label>
                            </li>
                          </ol>
                        </li>
                        <li class="row row--5">
                          <ol class="seats" type="A">
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="5A"
                                onChange={this.toggle}
                              />
                              <label for="5A">5A</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="5B"
                                onChange={this.toggle}
                              />
                              <label for="5B">5B</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="5C"
                                onChange={this.toggle}
                              />
                              <label for="5C">5C</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="5D"
                                onChange={this.toggle}
                              />
                              <label for="5D">5D</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="5E"
                                onChange={this.toggle}
                              />
                              <label for="5E">5E</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="5F"
                                onChange={this.toggle}
                              />
                              <label for="5F">5F</label>
                            </li>
                          </ol>
                        </li>
                        <li class="row row--6">
                          <ol class="seats" type="A">
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="6A"
                                onChange={this.toggle}
                              />
                              <label for="6A">6A</label>
                            </li>
                            <li class="seat">
                              <input
                                disabled
                                type="checkbox"
                                id="6B"
                                onChange={this.toggle}
                              />
                              <label for="6B">6B</label>
                            </li>
                            <li class="seat">
                              <input
                                disabled
                                type="checkbox"
                                id="6C"
                                onChange={this.toggle}
                              />
                              <label for="6C">6C</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="6D"
                                onChange={this.toggle}
                              />
                              <label for="6D">6D</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="6E"
                                onChange={this.toggle}
                              />
                              <label for="6E">6E</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="6F"
                                onChange={this.toggle}
                              />
                              <label for="6F">6F</label>
                            </li>
                          </ol>
                        </li>
                        <li class="row row--7">
                          <ol class="seats" type="A">
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="7A"
                                onChange={this.toggle}
                              />
                              <label for="7A">7A</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="7B"
                                onChange={this.toggle}
                              />
                              <label for="7B">7B</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="7C"
                                onChange={this.toggle}
                              />
                              <label for="7C">7C</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="7D"
                                onChange={this.toggle}
                              />
                              <label for="7D">7D</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="7E"
                                onChange={this.toggle}
                              />
                              <label for="7E">7E</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="7F"
                                onChange={this.toggle}
                              />
                              <label for="7F">7F</label>
                            </li>
                          </ol>
                        </li>
                        <li class="row row--8">
                          <ol class="seats" type="A">
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="8A"
                                onChange={this.toggle}
                              />
                              <label for="8A">8A</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="8B"
                                onChange={this.toggle}
                              />
                              <label for="8B">8B</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="8C"
                                onChange={this.toggle}
                              />
                              <label for="8C">8C</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="8D"
                                onChange={this.toggle}
                              />
                              <label for="8D">8D</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="8E"
                                onChange={this.toggle}
                              />
                              <label for="8E">8E</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="8F"
                                onChange={this.toggle}
                              />
                              <label for="8F">8F</label>
                            </li>
                          </ol>
                        </li>
                        <li class="row row--9">
                          <ol class="seats" type="A">
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="9A"
                                onChange={this.toggle}
                              />
                              <label for="9A">9A</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="9B"
                                onChange={this.toggle}
                              />
                              <label for="9B">9B</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="9C"
                                onChange={this.toggle}
                              />
                              <label for="9C">9C</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="9D"
                                onChange={this.toggle}
                              />
                              <label for="9D">9D</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="9E"
                                onChange={this.toggle}
                              />
                              <label for="9E">9E</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="9F"
                                onChange={this.toggle}
                              />
                              <label for="9F">9F</label>
                            </li>
                          </ol>
                        </li>
                        <li class="row row--10">
                          <ol class="seats" type="A">
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="10A"
                                onChange={this.toggle}
                              />
                              <label for="10A">10A</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="10B"
                                onChange={this.toggle}
                              />
                              <label for="10B">10B</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="10C"
                                onChange={this.toggle}
                              />
                              <label for="10C">10C</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="10D"
                                onChange={this.toggle}
                              />
                              <label for="10D">10D</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="10E"
                                onChange={this.toggle}
                              />
                              <label for="10E">10E</label>
                            </li>
                            <li class="seat">
                              <input
                                type="checkbox"
                                id="10F"
                                onChange={this.toggle}
                              />
                              <label for="10F">10F</label>
                            </li>
                          </ol>
                        </li>
                      </ol>
                      <div class="exit exit--back fuselage"></div>
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
                <div className="slide">
                  <div className="App">
                    <AwesomeButton
                      type="primary"
                      onPress={() => fullpageApi.moveSlideLeft()}
                    >
                      Go Back
                    </AwesomeButton>
                    <AwesomeButton
                      type="primary"
                      onPress={() => fullpageApi.moveSlideRight()}
                    >
                      Submit
                    </AwesomeButton>
                  </div>
                </div>
                <div className="slide">
                  <div className="App">
                    <AwesomeButton
                      type="primary"
                      onPress={() => fullpageApi.moveSlideRight()}
                    >
                      Button
                    </AwesomeButton>
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
