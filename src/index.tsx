import localPrint from "./print";
import * as React from "react";
const cloneDeep = require("lodash.clonedeep");
export default class ReactToPrint extends React.Component {
  onPrint() {
    localPrint("react-print-onPage");
  }
  render() {
    const asign = cloneDeep(this.props.children);
    asign.props.id = "react-print-onPage";
    return <div>{asign}</div>;
  }
}
