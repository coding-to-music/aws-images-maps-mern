import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import JourneyMap from './JourneyMap';
import JourneyMapContainer from "./JourneyMapContainer";

class Journey extends Component {
  constructor(props) {
    super(props);
    this.copyURL = this.copyURL.bind(this);
  }

  copyURL() {
    let url = document.getElementById("journey-url");
    url.select();
    document.execCommand("copy");
    alert(`URL copied to clipboard!`);
  }

  render() {
    let title = this.props.journey ? <h1>{this.props.journey.name}</h1> : <></>;
    let description = this.props.journey ? (
      <h2>{this.props.journey.description}</h2>
    ) : (
      <></>
    );
    return (
      <div className="journey">
        {title}
        {description}
        <JourneyMapContainer />
        <div className="share">
          <input
            type="text"
            id="journey-url"
            value={
              "https://myphotojourney.herokuapp.com/#/" +
              this.props.history.location.pathname
            }
          />
          <button onClick={this.copyURL}>copy url</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Journey);
