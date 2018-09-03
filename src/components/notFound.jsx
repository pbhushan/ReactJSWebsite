import React, { Component } from "react";
import { Button } from "mdbreact";
import Divider from "./common/divider";
import "../css/notFound.css";

class NotFound extends Component {
  goBack = () => {
    this.props.history.replace("/home");
  };

  render() {
    return (
      <React.Fragment>
        <Divider path={this.props.match.path} />
        <div className="nf_theme">
          <div className="unicorn" />

          <div className="container">
            <div className="four-oh-four">
              <h1>404 Error</h1>
            </div>

            <div className="warning">
              <h2>
                "All those moments will be lost in time, like tears in rain."
              </h2>
              <p>
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
              </p>

              <Button onClick={this.goBack} rounded>
                Please go back to the previous page
              </Button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NotFound;
