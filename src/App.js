import React from "react"
import "./App.css"
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date(),
            visible: true
        }
    }
    componentDidMount() {
        document.body.style.backgroundColor = "#EBE0CA"
        setInterval(() => {
            this.setState(prevState =>({
                date: new Date(),
                visible: !(prevState.visible)
              })
        )}, 1000)
    }
    render() {
        return (
            <div className={this.state.visible?"enclosing-div":"disappear"}>
                <p className="date-element">{this.state.date.toDateString()}</p>
                <h1 className="time-element">{this.state.date.toTimeString().split(" ",1)}</h1>
            </div>
        )
    }
}
export default App