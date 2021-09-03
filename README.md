# react - print - nb

react print 
### example:
___
#### Calling from class components

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
### Demo
___
 [![Edit react-to-print](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/nifty-sunset-wm7f2)
