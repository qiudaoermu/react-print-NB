class demo extends Component {
    render() {
        return (
            <div>
                <button
                    onClick={() => {
                        this.refs.test.onPrint();
                    }}
                >print
                </button>
                <Print
                    ref="test" insertHead
                >
                    <div>
                        <p>show</p>
                        <p className="printHide">hide</p>
                    </div>
                </Print>
            </div>
        );
    }
}