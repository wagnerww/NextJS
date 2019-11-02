import React, { Component } from "react";
import ReactGA from "react-ga";

export default () => Composed =>
  class extends Component {
    static getInitialProps(ctx) {
      return ctx;
    }

    componentDidMount() {
      console.log("PAGE_VIEW");
      ReactGA.initialize("ID_ANALYTICS");
      ReactGA.pageview(window.location.pathname);
    }

    render() {
      return <Composed {...this.props} />;
    }
  };