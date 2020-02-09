import React from "react";
import axios from "axios";
import ReactFullpage from "@fullpage/react-fullpage";
import { AwesomeButton } from "react-awesome-button";

import "react-awesome-button/dist/styles.css";

const serverIP = "146.169.134.71:8081";

class Issuer extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      name: "",
      dob: "",
      image: "",
      prover_username: "",
      prover_password: ""
    };
  }

  handleLogin = e => {
    e.preventDefault();
    const { issuerUsername, issuerPassword, issuerDID } = this.state;
    const loginCreds = {
      id: issuerUsername,
      key: issuerPassword,
      did: issuerDID,
      masterDid: "masterSecretId"
    };
    console.log(loginCreds);

    axios({
      method: "POST",
      url: `${serverIP}login`,
      data: loginCreds
    })
      .then(response => console.log(response))
      .then(() => {
        console.log("Logged In Successfully.");
        this.toggleProverPage();
      })
      .catch(response => {
        console.log(response);
        alert("Bad Request.");
      });
  };

  handleCreateCredential = e => {
    e.preventDefault();
    const {
      proverUsername,
      proverPassword,
      proverName,
      proverDob,
      proverPoints,
      proverEmail,
      credDefID,
      issuerDID,
      issuerUsername,
      issuerPassword
    } = this.state;

    const creds = {
      credDefId: credDefID, // String | credDefId
      dateOfBirth: proverDob, // String | dateOfBirth
      issuerDid: issuerDID, // String | issuerDid
      issuerWalletId: issuerUsername, // String | issuerWalletId
      issuerWalletKey: issuerPassword, // String | issuerissuerWalletKey
      licenceLevel: 2, // Number | licenceLevel
      name: "name_example", // String | name
      proverWalletId: "proverWalletId_example", // String | proverWalletId
      proverWalletKey: "proverWalletKey_example", // String | proverWalletKey
      // issuer
      issuerDid: issuerDID,
      issuerWalletId: issuerUsername,
      issuerWalletKey: issuerPassword,
      // prover
      credDefId: credDefID,
      proverWalletId: proverUsername,
      proverWalletKey: proverPassword,
      email: proverEmail,
      name: proverName,
      dateOfBirth: proverDob,
      licenceLevel: proverPoints
    };
    axios({
      method: "POST",
      url: `${serverIP}createCredential`,
      data: creds
    })
      .then(res => {
        if (res.status != 200) {
          alert("Bad Request.");
        } else {
          console.log("new masterDID: ", res.data.masterSecretId);
          alert(
            "License created successfully. Check your email for your secret ID!"
          );
        }
      })
      .catch(response => {
        console.log(response);
        alert("Bad request.");
      });
  };

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

  imageChange = e => {
    this.setState({
      image: e.target.files[0]
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append("image", this.state.image, this.state.image.name);
    form_data.append("title", this.state.title);
    form_data.append("content", this.state.content);
    let url = "http://localhost:8000/api/posts/";
    axios
      .post(url, form_data, {
        headers: {
          "content-type": "multipart/form-data"
        }
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };
  createAccount() {
    const { prover_username, prover_password, name, dob, image } = this.state;
    // let form_data = new FormData();
    // form_data.append("image", image, image.name);

    const url = `http://146.169.189.39:8080/transactions/create_account?wallet_id=${prover_username}&wallet_key=${prover_password}&name=${name}&dob=${dob}&image=${image}`;
    axios({
      method: "GET",
      url: url
    }).then(response => {
      console.log(response);
      alert(response.data);
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
                  <div className="App">
                    <div class="container">
                      <div class="c2">
                        <form class="signin">
                          <br />

                          <h1 class="signup1">Login</h1>

                          <br />
                          <br />

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
                            onChange={this.handleChange}
                          />
                          <input
                            name="did"
                            type="text"
                            placeholder="Did*"
                            class="field"
                            onChange={this.handleChange}
                          />
                        </form>
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
                    <div class="container">
                      <div class="c2">
                        <form class="signin">
                          <h1 class="signup1">Enter yo Dets</h1>

                          <input
                            name="prover_username"
                            type="text"
                            placeholder="New Username"
                            class="field"
                            onChange={this.handleChange}
                          />
                          <input
                            name="prover_password"
                            type="text"
                            placeholder="New Password"
                            class="field"
                            onChange={this.handleChange}
                          />
                          <input
                            name="name"
                            type="text"
                            placeholder="Fullname"
                            class="field"
                            onChange={this.handleChange}
                          />
                          <input
                            name="dob"
                            type="string"
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
                            onChange={this.imageChange}
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
                          onPress={() => this.createAccount()}
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

export default Issuer;
