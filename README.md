# react - print - nb
react print 
### example:
```
import ReactToPrint from "react-print-nb"
export default class Print extends React.Component { {
  render() {
    return (
      <div>
        <button onClick={() => {this.refs.test.onPrint()}}>print</button>
        <ReactToPrint ref="test">
          <div> 
            //print content
          </div>
        </ReactToPrint>
      </div>
    );
  }
}
```
###Demo
[![Edit react-to-print](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/nifty-sunset-wm7f2)
