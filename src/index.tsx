import localPrint from "./print";
import * as React from "react";
import render from "./react-to-html";
export default class ReactToPrint extends React.Component {
  onPrint() {
    localPrint(render(this.props.children));
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}
