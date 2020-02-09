import React from "react";

import "./Logo.css";

class Logo extends React.Component {
  componentDidMount() {
    var slides = ["CHAIN", "COLI", ""],
      i = 1;
    var next = 0;

    setTimeout(function() {
      var cap = setInterval(function() {
        next++;
        i++;
        document.getElementById("bump-swap").innerHTML = slides[next];
        if (i == slides.length) {
          //All the words are displayed clear interval
          clearInterval(cap);
        }
      }, 1750);
    }, 900);
  }
  render() {
    return (
      <div>
        <div class="bump">
          <div class="bump-half">BLOC</div>
          <div class="bump-half bump-slide">
            <div class="bump-half-item" id="bump-swap">
              KCHAIN
            </div>
            <div class="bump-half-here">PASS</div>
          </div>
        </div>

        <div class="intro">I'm so f***ing tired.</div>
      </div>
    );
  }
}

export default Logo;
