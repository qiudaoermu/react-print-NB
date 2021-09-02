import localPrint from "./print"
import * as React from "react";
export default class ReactToPrint extends React.Component {
  constructor(props) {
    super(props);
  }
  onPrint() {
    localPrint(this.props.children.props.id)
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}