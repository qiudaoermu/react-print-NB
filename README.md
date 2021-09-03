# react - print - nb
react print 
### example:
```
import print from "react-print-nb"
export default class Print extends React.Component { {
  render() {
    return (
      <div>
        <button onClick={() => {this.refs.test.onPrint()}}>print</button>
        <Print ref="test">
          <div> 
            //print content
          </div>
        </Print>
      </div>
    );
  }
}
```