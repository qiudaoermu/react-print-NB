# react - print - nb
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
          <div> 
            <p>show</p>
            <p className="printHide">hide</p>
          </div>
        </Print>
      </div>
    );
  }
}
```