# react - print - NB
react print 
### example:
```
import print from "react-print-nb"
class demo extends Component {
  render() {
    return (
      <div>
        <button onClick={() => {this.refs.test.onPrint()}}>print</button>
        <Print ref="test">
          <div id="printMe"> // don't forgit give an id;
            <p>show</p>
            <p className="printHide">hide</p>
          </div>
        </Print>
      </div>
    );
  }
}
```