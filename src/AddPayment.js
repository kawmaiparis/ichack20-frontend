import React from "react";
import axios from "axios";
import ReactFullpage from "@fullpage/react-fullpage";
import { AwesomeButton } from "react-awesome-button";
import "./AddPayment.css";

import "react-awesome-button/dist/styles.css";

const serverIP = "146.169.134.71:8081";

class AddPayment extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      did: "",
      mid: "",
      balance: 0,
      newusername: "",
      newpassword: "",
      newname: "",
      newdob: "",
      image: ""
    };
  }

  handleLogin = e => {
    // e.preventDefault();
    const { username, password, did, mid } = this.state;

    const url = `http://146.169.189.39:8080/transactions/get_account_balance?wallet_id=${username}&wallet_key=${password}&prover_did=${did}&prover_mid=${mid}`;
    console.log(url);
    axios({
      method: "GET",
      url: url
    }).then(response => {
      console.log("Logged In Successfully.");
      console.log(response);
      console.log(response.data);
      this.setState({ balance: parseFloat(response.data) });
      e.moveSlideRight();
    });
  };

  handleCreateAccount(e) {
    const { newusername, newpassword, newname, newdob, image } = this.state;

    const url = `http://146.169.189.39:8080/transactions/create_account?wallet_id=${newusername}&wallet_key=${newpassword}&name=${newname}&dob=${newdob}&image=${image}`;
    console.log(url);
    axios({
      method: "GET",
      url: url
    })
      .then(response => {
        console.log(response);
        alert(response.data);
        this.setState({
          username: this.newusername,
          password: this.newpassword,
          did: response.person_did,
          mid: response.master_secret_id
        });
        const anotherurl = `http://146.169.189.39:8080/transactions/get_account_balance?wallet_id=${this.username}&wallet_key=${this.password}&prover_did=${this.did}&prover_mid=${this.master_secret_id}`;
        axios({
          method: "GET",
          url: anotherurl
        })
          .then(() => {
            console.log("Logged in!");
            e.moveSlideRight();
          })
          .catch(err => console.log("Bad Loggin In With new Account"));
      })
      .catch(err => console.log("Bad Create Account"));
  }

  toggleProverPage = () => {
    const loginBox = document.getElementById("login");
    const proverBox = document.getElementById("prover");
    loginBox.style.display = "none";
    proverBox.style.display = "block";
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  addMonayy = e => {
    const { username, password, did, mid, amount, balance } = this.state;

    const url = `http://146.169.189.39:8080/transactions/deposit_funds?wallet_id=${username}&wallet_key=${password}&prover_did=${did}&prover_mid=${mid}&amount=${amount}`;
    axios({
      method: "GET",
      url: url
    }).then(response => {
      console.log("Monayy added");
      console.log(this.state);
      this.setState({ balance: parseInt(balance) + parseInt(amount) });
    });
  };

  componentDidMount() {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
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
                  <div class="ticketingPage">
                    <div class="container" id="container">
                      <div class="form-container sign-up-container">
                        <div className="form">
                          <h1>Create Account</h1>
                          <span>A shiny new account is waiting for you.</span>
                          <br />
                          <input
                            className="ticketing-input"
                            name="newusername"
                            type="text"
                            placeholder="Username"
                            onChange={this.handleChange}
                          />
                          <input
                            className="ticketing-input"
                            name="newpassword"
                            type="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                          />
                          <input
                            className="ticketing-input"
                            name="newname"
                            type="text"
                            placeholder="Name"
                            onChange={this.handleChange}
                          />
                          <input
                            className="ticketing-input"
                            name="newdob"
                            type="text"
                            placeholder="Date Of Birth"
                            onChange={this.handleChange}
                          />

                          <br />

                          <button
                            onClick={() =>
                              this.handleCreateAccount(fullpageApi)
                            }
                            id="Create an account"
                          >
                            Create an account
                          </button>
                        </div>
                      </div>
                      <div class="form-container sign-in-container">
                        <div className="form">
                          <h1>Login to see you Balance</h1>

                          <br />
                          <input
                            className="ticketing-input"
                            name="username"
                            type="text"
                            placeholder="Username"
                            onChange={this.handleChange}
                          />
                          <input
                            className="ticketing-input"
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                          />
                          <input
                            className="ticketing-input"
                            name="did"
                            type="email"
                            placeholder="Your DID"
                            onChange={this.handleChange}
                          />
                          <input
                            className="ticketing-input"
                            name="mid"
                            type="text"
                            placeholder="Your MID"
                            onChange={this.handleChange}
                          />

                          <a href="#">Forgot your password?</a>
                          <button
                            id="Log in"
                            onClick={() => this.handleLogin(fullpageApi)}
                          >
                            Sign In
                          </button>
                        </div>
                      </div>
                      <div class="overlay-container">
                        <div class="overlay">
                          <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>
                              To buy and check your balance, please log in your
                              with your info.
                            </p>
                            <button class="ghost" id="signIn">
                              Sign In
                            </button>
                          </div>
                          <div class="overlay-panel overlay-right">
                            <h1>Don't have an account?</h1>
                            <p>Set up your account in less than a minute!</p>
                            <button class="ghost" id="signUp">
                              Create an account
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div class="ticketingPage">
                    <div class="container payment" id="container">
                      <div class="form-container payment">
                        <button
                          id="back-button"
                          onClick={() => fullpageApi.moveSlideLeft()}
                        >
                          x
                        </button>
                        <div className="form">
                          <h1>Your Balance</h1>
                          <span>Im sleepy</span>
                          <br />
                          <h2>{parseFloat(this.state.balance)}</h2>
                          <br />
                          <input
                            name="amount"
                            type="number"
                            placeholder="Amount"
                            class="field"
                            onChange={this.handleChange}
                          />
                          <button
                            onClick={() => this.addMonayy(fullpageApi)}
                            id="Purchase your ticket"
                          >
                            Add Monayyy!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="App">
                    <div class="container">
                      <div class="c2">
                        <form class="signin">
                          <h1 class="signup1">Enter yo Dets</h1>
                          <br />
                          <br />
                          <input
                            name="name"
                            type="text"
                            placeholder="Fullname"
                            class="field"
                            onChange={this.handleChange}
                          />
                          <input
                            name="dob"
                            type="date"
                            placeholder="Date of Birth*"
                            class="field"
                            onChange={this.handleChange}
                          />
                          <input
                            name="image"
                            type="file"
                            accept="image/x-png,image/gif,image/jpeg"
                            placeholder="Image"
                            class="field"
                            onChange={this.handleChange}
                          />
                        </form>
                        <br />
                        <br />
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
                          onPress={() => console.log(this.state)}
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

export default AddPayment;
